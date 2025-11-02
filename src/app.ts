import { cors } from "@elysiajs/cors"
import { Elysia } from "elysia"
import { route } from "@/routes/todo"

export const app = new Elysia()
    .use(cors({ origin: "http://localhost:3000" }))
    .use(route)
