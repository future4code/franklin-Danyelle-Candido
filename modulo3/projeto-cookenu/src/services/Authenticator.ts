import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import { ITokenPayload } from '../models/User'

dotenv.config()

export class Authenticator {
    generateToken = (payload: ITokenPayload): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        return token
    }

    getTokenPayload = (token: string): ITokenPayload | null => {
        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY as string
            )

            return payload as ITokenPayload
        } catch (error) {
            return null
        }
    }
}