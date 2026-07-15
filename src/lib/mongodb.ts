// ============================================
// Techglaz Labs — MongoDB Connection Singleton
// ============================================
// Uses a cached connection to avoid creating new connections
// on every serverless function invocation (important for Vercel)

import mongoose from "mongoose";
import { dbFallback } from "./dbFallback";

const MONGODB_URI = process.env.MONGODB_URI;



/**
 * Global is used here to maintain a cached connection across
 * hot reloads in development. This prevents connections from
 * growing exponentially during API Route usage.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

async function dbConnect(): Promise<typeof mongoose | null> {
  if (!MONGODB_URI) {
    console.warn(
      "[DB] MONGODB_URI is not defined. Using local JSON fallback."
    );
    dbFallback.setFallbackMode(true);
    return null;
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000, // 5s timeout to avoid long hangs
      connectTimeoutMS: 5000,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongooseInstance) => {
      console.log("[DB] Successfully connected to MongoDB Atlas.");
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e: any) {
    cached.promise = null;
    console.error(
      `[DB] MongoDB connection failed: ${e.message || e}. Falling back to local JSON database.`
    );
    dbFallback.setFallbackMode(true);
    return null;
  }

  return cached.conn;
}

export default dbConnect;
