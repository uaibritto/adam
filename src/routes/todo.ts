import { Elysia, t } from "elysia"
import { Controller } from "@/controllers/controller"
import { createTodo, deleteTodo, findTodoById, getTodos } from "@/services/service"

const controller = new Controller()
const body = t.Object({ title: t.String() })
const params = t.Object({ id: t.String() })

export const route = new Elysia()
	.get("/", () => controller.execute(getTodos))
	.post("/", ({ body }) => controller.execute(() => createTodo({ body })), { body })
	.get("/:id", ({ params }) => controller.execute(() => findTodoById({ params })), { params })
	.delete("/:id", ({ params }) => controller.execute(() => deleteTodo({ params })), { params })
