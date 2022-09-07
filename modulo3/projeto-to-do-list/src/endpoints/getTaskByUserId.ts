import { Request, Response } from "express";
import selectTaskByUserId from "../data/selectTaskByUserId";

export default async function getTaskByUserId(req:Request, res:Response)  {
    try{
        const result = await selectTaskByUserId(req.query.id)  
        if(!result){
            res.status(404).send("not found")
        }         
        res.status(200).send({
            "tasks": result
        })

    }catch(error){
        res.status(400).send(error)
    }
}
