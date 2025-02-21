import express from "express"

const PORT = 3333

const app = express()
app.use(express.json()) //definindo o padrão das requests para json no express

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

    app.post("/products", (request, reponse) => {
        const {name, price} = request.body

        //reponse.send(`Produto ${name} custa $ ${price}`)
        reponse.status(201).json({name, price}) //devolver resposta em formato json sem a necessidade de converter com stringfy e tb colocar o status code para retornar na mesma linha
    })

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
