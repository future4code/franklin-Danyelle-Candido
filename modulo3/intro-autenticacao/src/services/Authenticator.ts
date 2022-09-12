import * as jwt from "jsonwebtoken"
import { authenticationData } from "../type"
import dotenv from "dotenv"

dotenv.config()
export default class Authenticator{
    generateToken = (payload:authenticationData) =>{
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn:"5h"
            }

        )
    }

    getTokenData = (token:string) =>{
        const tokenData = jwt.verify(
            token, process.env.JWT_KEY as string,
        )
        return tokenData
    }
}