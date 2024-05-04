import { db } from '@acme/db/server'
import { users } from '@acme/db'

export const load = async () => {
    return { users: await db.select().from(users) }
};