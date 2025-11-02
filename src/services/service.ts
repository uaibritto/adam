import { query } from "@/config/connection"
import type { Todo } from "@/models/todo"

export const createTodo = async ({ body }: { body: { title: string } }) => {
	await query`
	  INSERT INTO todos (title) VALUES (${body.title})
	`
}

export const getTodos = async (): Promise<Todo[]> => {
	const rows = await query`SELECT * FROM todos`

	return rows.map((row: Todo) => ({
		id: Number(row.id),
		title: String(row.title),
		completed: Boolean(row.completed),
	}))
}

export const findTodoById = async ({ params }: { params: { id: string } }): Promise<Todo | null> => {
	const row = await query`SELECT * FROM todos WHERE id = ${Number(params.id)}`

	return {
		id: Number(row[0].id),
		title: String(row[0].title),
		completed: Boolean(row[0].completed),
	}
}

export const deleteTodo = async ({ params }: { params: { id: string } }) => {
	await query`DELETE FROM todos WHERE id = ${Number(params.id)}`
}
