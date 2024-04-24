import { bigint, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: bigint('id', { "unsigned": true, mode: 'number' }).autoincrement().primaryKey().notNull(),
  name: varchar('name', { length: 30 }).notNull(),
})