import type { Config } from "drizzle-kit";

if (!process.env.DB_HOST) throw new Error("DB_HOST env var is not set")
if (!process.env.DB_NAME) throw new Error("DB_NAME env var is not set")
if (!process.env.DB_USERNAME) throw new Error("DB_USERNAME env var is not set")
if (!process.env.DB_PASSWORD) throw new Error("DB_PASSWORD env var is not set")

// Push requires SSL so use URL instead of username/password
export const connectionStr = new URL(`mysql://${process.env.DB_HOST}/${process.env.DB_NAME}`);
connectionStr.username = process.env.DB_USERNAME;
connectionStr.password = process.env.DB_PASSWORD;
connectionStr.searchParams.set("ssl", '{"rejectUnauthorized":true}');

export default {
    schema: "./src/lib/server/schema.ts",
    driver: "mysql2",
    dbCredentials: { uri: connectionStr.href }
  } satisfies Config;