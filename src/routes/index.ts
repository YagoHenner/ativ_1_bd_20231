import { Router } from "express";
import authRouter from "./authRouter.routes"

const mainRouter = Router()

mainRouter.use('/', authRouter)

export default mainRouter;