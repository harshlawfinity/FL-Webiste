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
      const primaryUri = mongoUri || directMongoUri;
      const primaryOptions = {
        bufferCommands: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
      };
      primaryOptions.dbName = "chats";

      // directConnection only for single-host URI (replica set = multiple hosts = no directConnection)
      const isSingleHost = primaryUri && !primaryUri.includes(",");
      if (!mongoUri && directMongoUri && isSingleHost) {
        primaryOptions.directConnection = true;
      }

      try {
        return await mongoose.connect(primaryUri, primaryOptions);
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

        const directOptions = {
          bufferCommands: false,
          maxPoolSize: 10,
          serverSelectionTimeoutMS: 10000,
        };
        directOptions.dbName = "chats";
        if (!directMongoUri.includes(",")) {
          directOptions.directConnection = true;
        }
        return mongoose.connect(directMongoUri, directOptions);
      }
    })();
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
