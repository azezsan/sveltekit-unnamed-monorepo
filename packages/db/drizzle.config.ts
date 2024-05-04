import type { Config } from "drizzle-kit";

if (!process.env.DB_URL) throw new Error("DB_URL not set")

export default {
  schema: "./src/lib/schema.ts",
  driver: "mysql2",
  dbCredentials: { uri: process.env.DB_URL }
} satisfies Config;