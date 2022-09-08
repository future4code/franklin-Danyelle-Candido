import * as jwt from "jsonwebtoken"
import { authenticationData } from "../type"

export default class Authenticator{
    generateToken = (payload:authenticationData) =>{
        return jwt.sign(
            payload,
            "senhaSuperSegura",
            {
                expiresIn:"5h"
            }

        )
    }

    geTokenData = (token:string) =>{
        const tokenData = jwt.verify(
            token, "senhaSuperSegura"
        )
        return tokenData
    }
}