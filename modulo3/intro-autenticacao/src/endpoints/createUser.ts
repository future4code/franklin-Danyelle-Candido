import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { authenticationData, user } from "../type";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }
      if (!email|| email.indexOf("@") === -1) {
         throw new Error("Invalid email");
       }

       if (!password || password.length < 6) {
         throw new Error("Invalid password");
       }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = Date.now().toString()

      const newUser: user = { id, name, nickname, email, password }

      await connection('to_do_list_users')
         .insert(newUser)

      const payload:authenticationData = {
         id:newUser.id
      }

      const token = new Authenticator().generateToken(payload)

      res.status(201).send({ token })

   } catch (error) {
      console.log(error)

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error })
      }
   }
}