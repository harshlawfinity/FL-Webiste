import mongoose from "mongoose";

const globalForFactoryDb = globalThis;

if (!globalForFactoryDb.__factoryDbCache) {
  globalForFactoryDb.__factoryDbCache = { conn: null, promise: null };
}

const cache = globalForFactoryDb.__factoryDbCache;

function normalizeUri(uriValue) {
  if (!uriValue) {
    return "";
  }

  const trimmed = String(uriValue).trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
}

function maskUri(uriValue) {
  if (!uriValue) {
    return "empty";
  }

  return uriValue.replace(/\/\/([^@]+)@/, "//***:***@");
}

/** Database name for Factory Tawk chat data. Same DB as webhook for consistency. */
const FACTORY_DB_NAME = "factoryChat";

function ensureDatabaseInUri(uri, dbName) {
  if (!uri || !dbName) return uri;
  const q = uri.indexOf("?");
  const pathPart = q >= 0 ? uri.slice(0, q) : uri;
  const queryPart = q >= 0 ? uri.slice(q) : "";
  const lastSlash = pathPart.lastIndexOf("/");
  const afterSlash = pathPart.slice(lastSlash + 1);
  const hasDbSegment =
    afterSlash && !afterSlash.includes(":") && !/^\d+$/.test(afterSlash);
  if (hasDbSegment) return uri;
  const sep = pathPart.endsWith("/") ? "" : "/";
  return pathPart + sep + dbName + queryPart;
}

export async function connectFactoryDb() {
  if (cache.conn) {
    return cache.conn;
  }

  const primaryUri = normalizeUri(process.env.FACTORY_MONGODB_URI);
  const fallbackUri = normalizeUri(process.env.FACTORY_MONGODB_URI_DIRECT);

  if (!primaryUri && !fallbackUri) {
    throw new Error(
      "Missing FACTORY_MONGODB_URI. Set FACTORY_MONGODB_URI (or FACTORY_MONGODB_URI_DIRECT)."
    );
  }

  if (!cache.promise) {
    cache.promise = (async () => {
      let uri = primaryUri || fallbackUri;
      uri = ensureDatabaseInUri(uri, FACTORY_DB_NAME);
      const baseOptions = {
        bufferCommands: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
        dbName: FACTORY_DB_NAME,
      };

      if (!primaryUri && fallbackUri) {
        baseOptions.directConnection = true;
      }

      try {
        const conn = await mongoose.connect(uri, baseOptions);
        console.log("[Mongo] connected to DB:", mongoose.connection.name);
        console.info(`[factory:db] connected uri=${maskUri(uri)}`);
        return conn;
      } catch (primaryError) {
        const canRetryDirect =
          Boolean(primaryUri) && Boolean(fallbackUri) && primaryUri !== fallbackUri;

        if (!canRetryDirect) {
          console.error(
            `[factory:db] connect failed uri=${maskUri(uri)} error=${primaryError?.message}`
          );
          throw primaryError;
        }

        console.warn(
          `[factory:db] primary connect failed, retrying direct uri=${maskUri(fallbackUri)}`
        );
        let directUri = ensureDatabaseInUri(fallbackUri, FACTORY_DB_NAME);
        const fallbackOptions = {
          bufferCommands: false,
          maxPoolSize: 10,
          serverSelectionTimeoutMS: 10000,
          directConnection: true,
          dbName: FACTORY_DB_NAME,
        };
        const conn = await mongoose.connect(directUri, fallbackOptions);
        console.log("[Mongo] connected to DB:", mongoose.connection.name);
        console.info(`[factory:db] connected via direct uri=${maskUri(directUri)}`);
        return conn;
      }
    })();
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
