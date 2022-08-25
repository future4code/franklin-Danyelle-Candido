import { Request, Response } from "express";
import selectUser from "../data/selectUser";

export default async function getUserById(req:Request, res:Response)  {
    try{

        const user= await selectUser(req.params.id)
        if(!user){
            res.status(400).send("user undefined")
        }
                
        res.status(200).send({
            id:user.id,
            nickname:user.nickname
        })

    }catch(error){
        res.status(400).send(error)
    }
}
