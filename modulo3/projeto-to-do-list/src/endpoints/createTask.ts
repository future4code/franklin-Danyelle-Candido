import { Request, Response } from "express";
import insertTask from "../data/insertTask";
import moment from "moment";


export default async function createTask(req:Request, res:Response)  {
    try{

        if(!req.body.title ||
            !req.body.description ||
            !req.body.limitDate ||
            !req.body.creatorUserId){
            res.status(400).send("falta algum dado")
        }
        const dateDiff: number = moment(req.body.limitDate,"DD/MM/YYYY").unix()-moment().unix()
         
        if(dateDiff <= 0){
            res.status(400).send("digite uma data valida")
        }


        const id:string = Date.now().toString()

        await insertTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.limitDate, "DD/MM/YYYY").format("YYYY-MM-DD"),
            req.body.creatorUserId,

        )           
        res.status(200).send("criado com sucesso , id:"+ id)

    }catch(error){
        res.status(400).send(error)
    }
}
