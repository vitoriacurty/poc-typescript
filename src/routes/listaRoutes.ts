import { listaController } from "../controllers/listaController"
import { Router } from "express"
import { errorHandler } from "../middleware/errorHandler"

const listaRouter = Router()

listaRouter.get("/lista", listaController.getLista)
listaRouter.post("/lista", errorHandler ,listaController.postLista)
listaRouter.delete("/lista/:id", listaController.deleteLista)
listaRouter.put("/lista/:id", listaController.updateLista)

export default listaRouter