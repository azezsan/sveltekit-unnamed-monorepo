import { db, users } from 'db'

export const load = async () => {
    return { users: await db.select().from(users) }
};