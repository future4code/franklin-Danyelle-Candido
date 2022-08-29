import { Request, Response } from "express";
import selectUserByName from "../data/selectUserByname";


export default async function getUserByName(req:Request, res:Response)  {
    try{
        const result = await selectUserByName(req.query.id)  
        if(!result){
            res.status(404).send("not found")
        }         
        res.status(200).send(result)

    }catch(error){
        res.status(400).send(error)
    }
}
