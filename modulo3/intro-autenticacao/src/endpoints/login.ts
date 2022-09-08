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
        
 
       
 
    } catch (error) {
 
       if (res.statusCode === 200) {
          res.status(500).send({ message: "Internal server error" })
       } else {
          res.send({ message: error })
       }
    }
 }
