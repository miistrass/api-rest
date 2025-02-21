import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware.js"
import { ProductController } from "../controllers/ProductsController.js"

const productsRoutes = Router()
const productsController = new ProductController()

productsRoutes.get("/", productsController.index)

productsRoutes.post("/", productsController.create)

export {productsRoutes}