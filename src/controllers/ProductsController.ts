import { Request, Response } from "express"
import { AppError } from "../utils/AppError.js"

class ProductController {
    /**
     * Uma controller deve ter no máximo 5 métodos- isso é uma padronização
     * index - GET para listar
     * show - GET para exibir um registro específico
     * create - POST para criar
     * update - PUT para atualizar
     * remove - DELETE para deletar
     */

    index(request: Request, response: Response) {
        const {page, limit} = request.query

        response.send(`Página ${page} de ${limit}`)
    }

    create(request: Request, response: Response) {
        const {name, price} = request.body

        //throw new AppError("Erro ao tentar criar um produto!")

        response.status(201).json({name, price, user_id: request.user_id})
    }

}

export {ProductController}