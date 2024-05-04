import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";
import * as schema from "../schema";

if (!process.env.DB_HOST) throw new Error("DB_HOST not set")
if (!process.env.DB_USERNAME) throw new Error("DB_USERNAME not set")
if (!process.env.DB_PASSWORD) throw new Error("DB_PASSWORD not set")

const client = new Client({
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

export const db = drizzle(client, { schema });