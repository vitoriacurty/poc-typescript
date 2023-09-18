import express, { Express } from "express"
import dotenv from "dotenv"
dotenv.config

const app: Express = express()
app.use(express.json())

const port: number = Number(process.env.PORT) || 5000
app.listen(port, () => console.log(`Servidor rodando na porta 5000`))