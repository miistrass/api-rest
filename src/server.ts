import express from "express"
import { routes } from "./routes/index.js"

const PORT = 3333

const app = express()
app.use(express.json()) //definindo o padrão das requests para json no express

app.use(routes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
