import express from "express"
import { myMiddleware } from "./middlewares/my-middleware.js"

const PORT = 3333

const app = express()
app.use(express.json()) //definindo o padrão das requests para json no express

//app.use(myMiddleware) //vai passar pelo middleware para fazer a requisição - porém essa forma é para usar o middleware global, para todas as rotas existentes

// Parâmetros nomeados ficam dessa forma no node.js com express
// app.get("/products/:id/:user", (request, response) => {
//     const {id, user} = request.params
//     response.send(`Produto ${id} do usuário ${user}`)
// })

// Parâmetros não nomeados (query params) ficam dessa forma no node.js com express
    app.get("/products/", (request, response) => {
        //      /products?page=1&limit=10
        response.send(`Produtos`)
    })

    //caso eu queria usar um middleware em uma rota específica eu adiciono dps da rota especificada
    app.post("/products", myMiddleware, (request, response) => {
        const {name, price} = request.body

        //reponse.send(`Produto ${name} custa $ ${price}`)
        response.status(201).json({name, price}) //devolver resposta em formato json sem a necessidade de converter com stringfy e tb colocar o status code para retornar na mesma linha
    })

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
