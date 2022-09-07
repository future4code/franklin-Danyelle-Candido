import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUser";
import selectUser from "../data/selectUser";

export default async function getAllUsers(req:Request, res:Response)  {
    try{

        const user= await selectAllUsers()     
        res.status(200).send(user)

    }catch(error){
        res.status(400).send(error)
    }
}
