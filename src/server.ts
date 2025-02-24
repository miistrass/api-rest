import express, { Request, Response, NextFunction } from "express"
import { ZodError } from "zod"

import { routes } from "./routes/index.js"
import { AppError } from "./utils/AppError.js"


const PORT = 3333

const app = express()
app.use(express.json()) //definindo o padrão das requests para json no express

app.use(routes)

app.use((error: any, request: Request, response: Response, next: NextFunction) => {

    if(error instanceof AppError) {
        return response.status(error.statusCode).json({message: error.message})
    }

    if(error instanceof ZodError) {
        return response.status(400).json({ message:"Validation Error!", issues: error.format() })
    }

    response.status(500).json({ message: error.message })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
