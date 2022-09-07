import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req:Request, res:Response)  {
    try{

        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send("Você precisa inserir o valor a ser alterado ")
        }
        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email,
        )

        
        res.status(200).send("alterado com sucesso")

    }catch(error){
        res.status(400).send(error)
    }
}
