import { query } from "@/config/connection"

await query`
    CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT UNIQUE NOT NULL,
        completed BOOLEAN NOT NULL DEFAULT false
    );
`
