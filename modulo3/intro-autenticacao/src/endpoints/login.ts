import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/Authenticator";
import { authenticationData, user } from "../type";
import { IdGenerator } from "../services/IdGenerator";
import { connect } from "http2";

export default async function login(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
        const {email, password} = req.body;
        
        if(!email || !password){
         throw new Error("Por favor, preencha email e senha ")
        }
        if (!email || email.indexOf("@") === -1) {
         throw new Error("Invalid email");
       }

        const [user] = await connection ("to_do_list_users").where({email})

        if(!user || user.password !==password){
         throw new Error("credenciais invalidas ")
        }

        const authenticator = new Authenticator()
        const payload:authenticationData = {
         id: user.id
        }
       
        const token = authenticator.generateToken(payload) 
        res.status(201).send({token})
 
    } catch (error) {
 
       if (res.statusCode === 200) {
          res.status(500).send({ message: "Internal server error" })
       } else {
          res.send({ message: error })
       }
    }
 }
