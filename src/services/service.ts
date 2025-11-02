import { db } from "@/config/connection"
import type { Todo } from "@/models/todo"

export class Service {
	async createTodo({ body }: { body: { title: string } }) {
		await db.mutation`
	  INSERT INTO todos (title) VALUES (${body.title})
	`
	}

	async getTodos(): Promise<Todo[]> {
		const rows = await db.query`SELECT * FROM todos`

		return rows.map((row: Todo) => ({
			id: Number(row.id),
			title: String(row.title),
			completed: Boolean(row.completed),
		}))
	}

	async findTodoById({ params }: { params: { id: string } }): Promise<Todo | null> {
		const row = await db.query`SELECT * FROM todos WHERE id = ${Number(params.id)}`

		return {
			id: Number(row[0].id),
			title: String(row[0].title),
			completed: Boolean(row[0].completed),
		}
	}

	async deleteTodo({ params }: { params: { id: string } }) {
		await db.mutation`DELETE FROM todos WHERE id = ${Number(params.id)}`
	}
}
