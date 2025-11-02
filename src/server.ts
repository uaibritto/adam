import { app } from "@/app"

app
    .onStart(() => console.log("Servidor em chamas! 🔥🧯"))
    .listen({ port: 3333 })
