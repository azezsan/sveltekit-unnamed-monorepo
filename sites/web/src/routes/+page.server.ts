import { db, users } from "db";

export const load = async () => {
    db.select().from(users).then(console.log)
};