import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg"; 
import * as schema from "./schema.ts"
import { env, isProd } from "../../env.ts"
import { remember } from "@epic-web/remember";
import { C } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";

const createPool = () => {
    return new Pool({
        conncetionString: env.DATABASE_URL
    })
}

let client

if (isProd()){
    client = createPool()
} else {
    client = remember('dbPool', () => createPool())
}

export const db = drizzle({ client, schema })
export default db