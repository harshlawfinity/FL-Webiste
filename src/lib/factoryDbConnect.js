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
      const uri = primaryUri || fallbackUri;
      const baseOptions = {
        bufferCommands: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
      };
      baseOptions.dbName = "chats";

      if (!primaryUri && fallbackUri) {
        baseOptions.directConnection = true;
      }

      try {
        const conn = await mongoose.connect(uri, baseOptions);
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
        const fallbackOptions = {
          bufferCommands: false,
          maxPoolSize: 10,
          serverSelectionTimeoutMS: 10000,
          directConnection: true,
        };
        fallbackOptions.dbName = "chats";
        const conn = await mongoose.connect(fallbackUri, fallbackOptions);
        console.info(`[factory:db] connected via direct uri=${maskUri(fallbackUri)}`);
        return conn;
      }
    })();
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
