import type { Config } from "drizzle-kit";

if (!process.env.DB_HOST) throw new Error("DB_HOST not set")
if (!process.env.DB_USERNAME) throw new Error("DB_USERNAME not set")
if (!process.env.DB_PASSWORD) throw new Error("DB_PASSWORD not set")
if (!process.env.DB_NAME) throw new Error("DB_NAME not set")
if (!process.env.DB_URL) throw new Error("DB_URL not set")

export default {
  schema: "./src/lib/schema.ts",
  dialect: 'mysql',
  dbCredentials: { url: process.env.DB_URL }
} satisfies Config;