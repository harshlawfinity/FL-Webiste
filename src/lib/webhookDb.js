import mongoose from "mongoose";
import path from "path";
import { config as dotenvConfig } from "dotenv";

// Ensure .env is loaded from project root (works even if Next.js didn't load it)
const projectRoot = process.cwd();
dotenvConfig({ path: path.join(projectRoot, ".env") });
dotenvConfig({ path: path.join(projectRoot, ".env.local") });

const globalForWebhookDb = globalThis;

if (!globalForWebhookDb.__webhookDbCache) {
  globalForWebhookDb.__webhookDbCache = { conn: null, promise: null };
}

const cache = globalForWebhookDb.__webhookDbCache;

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

/** Database name for Tawk chat data. All collections live under this DB. */
const WEBHOOK_DB_NAME = "factoryChat";

/**
 * If URI has no database path (e.g. ...host/?ssl=...), append /factoryChat before query params.
 * Does not change credentials or query parameters.
 */
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

function getMongoUri() {
  const from = (v) => normalizeUri(v);
  const uri =
    from(process.env.WEBHOOK_MONGO_URI) ||
    from(process.env.WEBHOOK_MONGODB_URI) ||
    from(process.env.FACTORY_MONGODB_URI) ||
    from(process.env.MONGODB_URI) ||
    from(process.env.MONGO_URI);
  if (uri) return uri;
  // Fallback: in case .env key has BOM or typo, find any env var that looks like a Mongo URI
  for (const key of Object.keys(process.env)) {
    if (
      (key.includes("MONGO") || key.includes("MONGODB")) &&
      key.includes("URI") &&
      process.env[key]
    ) {
      const u = from(process.env[key]);
      if (u && (u.startsWith("mongodb://") || u.startsWith("mongodb+srv://")))
        return u;
    }
  }
  return "";
}

export async function connectWebhookDb() {
  if (cache.conn) {
    return cache.conn;
  }

  const mongoUri = getMongoUri();
  const directMongoUri =
    normalizeUri(process.env.WEBHOOK_MONGO_URI_DIRECT) ||
    normalizeUri(process.env.WEBHOOK_MONGODB_URI_DIRECT);
  const uri = mongoUri || directMongoUri;

  if (!uri) {
    throw new Error(
      "Missing Mongo URI. Set WEBHOOK_MONGO_URI, FACTORY_MONGODB_URI, or MONGODB_URI."
    );
  }

  if (!cache.promise) {
    cache.promise = (async () => {
      let primaryUri = mongoUri || directMongoUri;
      primaryUri = ensureDatabaseInUri(primaryUri, WEBHOOK_DB_NAME);
      const primaryOptions = {
        bufferCommands: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
        dbName: WEBHOOK_DB_NAME,
      };

      // directConnection only for single-host URI (replica set = multiple hosts = no directConnection)
      const isSingleHost = primaryUri && !primaryUri.includes(",");
      if (!mongoUri && directMongoUri && isSingleHost) {
        primaryOptions.directConnection = true;
      }

      try {
        const conn = await mongoose.connect(primaryUri, primaryOptions);
        console.log("[Mongo] connected to DB:", mongoose.connection.name);
        return conn;
      } catch (primaryError) {
        const canFallback =
          Boolean(mongoUri) &&
          Boolean(directMongoUri) &&
          mongoUri !== directMongoUri;

        if (!canFallback) {
          console.error(
            `[tawk:db] connect failed uri=${maskUri(primaryUri)} error=${primaryError?.message}`
          );
          throw primaryError;
        }

        console.warn(
          `[tawk:db] primary connect failed, retrying direct uri=${maskUri(directMongoUri)}`
        );

        let fallbackUri = ensureDatabaseInUri(directMongoUri, WEBHOOK_DB_NAME);
        const directOptions = {
          bufferCommands: false,
          maxPoolSize: 10,
          serverSelectionTimeoutMS: 10000,
          dbName: WEBHOOK_DB_NAME,
        };
        if (!fallbackUri.includes(",")) {
          directOptions.directConnection = true;
        }
        const conn = await mongoose.connect(fallbackUri, directOptions);
        console.log("[Mongo] connected to DB:", mongoose.connection.name);
        return conn;
      }
    })();
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
