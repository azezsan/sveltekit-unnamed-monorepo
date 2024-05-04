import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";
import * as schema from "../schema";

if (!process.env.DB_URL) throw new Error("DB_URL not set")

const client = new Client({
    url: process.env.DB_URL
});

export const db = drizzle(client, { schema });