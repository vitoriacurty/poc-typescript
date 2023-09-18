import { listaController } from "controllers/listaController"
import { Router } from "express"

const listaRouter = Router()

listaRouter.get("/lista", listaController.getLista)
listaRouter.post("/lista")
listaRouter.delete("/lista")
listaRouter.put("/lista")

export default listaRouter