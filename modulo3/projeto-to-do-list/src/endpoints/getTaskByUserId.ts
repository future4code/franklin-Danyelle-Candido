import { Request, Response } from "express";
import selectTaskByUserId from "../data/selectTaskByUserId";

export default async function getTaskByUserId(req:Request, res:Response)  {
    try{
        const result = await selectTaskByUserId(req.query.id)  
        if(!result){
            res.status(404).send("not found")
        }         
        res.status(200).send({
            "tasks":[
                {
                    "taskId": result.id
                }
            ]
        }
            
            
/*             result


            id: result.id,
            title:result.title,
            description:result.description,
            limitDate: moment(result.limit_date,'YYYY-MM-DD').format('DD/MM/YYYY'), 
            status: result.status,
            creatorUserId:result.creator_user_id,
            nickname: result.nickname */
        
        )

    }catch(error){
        res.status(400).send(error)
    }
}
