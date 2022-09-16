import { Router } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../database/UserDatabase'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export const userRouter = Router()//IMPORTANDO O ROUTER 

//ABAIXO EU IMPORTO MEU CONTROLER 
const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new Authenticator(),
        new IdGenerator(),
        new HashManager()
    )
)


//ABAIXO É ONDE EU CHAMO MINHAS ROTAS PELO CONTROLER
userRouter.post("/signup", userController.signup)//NO ROUTER OQ EU COLOCO COMO PARAMETRO VIRA DEPOIS DO /USER 
userRouter.post("/login", userController.login)
userRouter.get("/", userController.getUsers)
userRouter.delete("/:id", userController.deleteUser)
userRouter.put("/:id", userController.editUser)