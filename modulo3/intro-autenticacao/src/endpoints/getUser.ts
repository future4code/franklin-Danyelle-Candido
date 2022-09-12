import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { authenticationData } from "../type";

export default async function getUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const token = req.headers.authorization as string

      if (!token) {
         res.statusCode = 422
         res.statusMessage = "Informe o token"
         throw new Error()
      }

      const authenticator = new Authenticator()
      const tokenData = authenticator.getTokenData(token) as authenticationData

      if(!tokenData){
         res.statusCode = 401
         res.statusMessage = "token invalido"
         throw new Error()
      }

      await connection('to_do_list_users')
         .select("*")
         .where({ id: tokenData.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}
