import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";
import { connectionStr } from "./config.js";
import * as schema from "./schema.js";

const client = new Client({
    url: connectionStr.href
});

export const db = drizzle(client, { schema });