import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware.js"

const productsRoutes = Router()

productsRoutes.get("/", (request, response) => {
    response.send(`Produtos`)
})

productsRoutes.post("/", myMiddleware, (request, response) => {
    const {name, price} = request.body

    response.status(201).json({name, price, user_id: request.user_id})
})

export {productsRoutes}