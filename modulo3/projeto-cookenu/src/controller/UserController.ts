import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginInputDTO, ISignupInputDTO } from "../models/User";

export class UserController {
    constructor(
        protected userBusiness: UserBusiness
    ) {}

    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)
        } catch (error) {
            console.log(error)

            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: any = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public findUserController = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string;
    
          const user = await this.userBusiness.findUserBusiness(token);
    
          res.status(200).send(user);
        } catch (error: any) {
          res.status(error.statusCode).send(error.message);
        }
      }
    
    public getUserByIdController = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization as string;
          const { id } = req.params;
    
          const user = await this.userBusiness.getUserByIdBusiness(id, token);
    
          res.status(200).send(user);
        } catch (error: any) {
          res.status(error.statusCode).send(error.message);
        }
      }
    }
    
}