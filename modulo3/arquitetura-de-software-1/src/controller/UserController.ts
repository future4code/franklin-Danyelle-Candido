import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

const userBusiness = new UserBusiness()

export default class UserController {
    public signup = async (req: Request, res: Response) => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await userBusiness.signup(input)
            
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }
    public login = async (req: Request, res: Response) => {
        try {
            const input: any = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await userBusiness.login(input)
            
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }
    public listusers = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const response = await userBusiness.listusers(token)
            
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }
    public deleteuser = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const response = await userBusiness.deleteUser(input)
            
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado"})
        }
    }
}