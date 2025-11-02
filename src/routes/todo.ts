import { Elysia, t } from "elysia"
import { Controller } from "@/controllers/controller"
import { Service } from "@/services/service"

const controller = new Controller()
const service = new Service()

const body = t.Object({ title: t.String() })
const params = t.Object({ id: t.String() })

export const route = new Elysia({ prefix: "/todos" })
	.get("/", () => controller.execute(service.getTodos))
	.post("/", ({ body }) => controller.execute(() => service.createTodo({ body })), { body })
	.get("/:id", ({ params }) => controller.execute(() => service.findTodoById({ params })), { params })
	.delete("/:id", ({ params }) => controller.execute(() => service.deleteTodo({ params })), { params })
