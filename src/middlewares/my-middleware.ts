import { Request, Response, NextFunction } from "express";

//next serve para o middleware não morrer no meio do caminho
//a não ser que seja do seu desejo
export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  request.user_id = "123456"

  console.log("Passou pelo Middleware!")

  return next()
}
