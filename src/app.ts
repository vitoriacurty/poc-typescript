import express, { Express } from "express"
import "express-async-errors"
import dotenv from "dotenv"
import listaRouter from "./routes/listaRoutes"
import { errorHandler } from "./middleware/errorHandler"
dotenv.config

const app: Express = express()
app.use(express.json())
app.use(listaRouter)
app.use(errorHandler)

const port: number = Number(process.env.PORT) || 5000
app.listen(port, () => console.log(`Servidor rodando na porta 5000`))