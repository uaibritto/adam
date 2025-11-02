import { Elysia } from 'elysia'
import { route } from '@/routes/todo'

export const app = new Elysia()
    .use(route)
