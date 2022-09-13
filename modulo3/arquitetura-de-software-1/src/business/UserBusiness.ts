import UserDatabase from "../database/UserDatabase"
import { User } from "../model/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const userDatabase = new UserDatabase()
const authenticator = new Authenticator()

export default class UserBusiness {
    public signup = async (input: any) => {
        const name = input.name
        const email = input.email
        const password = input.password

        if (!name || typeof name !== "string") {
            throw new Error("Parâmetro 'name' inválido")
        }
        if (!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido")
        }
        if (!email.includes('@')) {
            throw new Error("Email inválido")
        }

        const id = idGenerator.generate()       
        const hashPassword = await hashManager.hash(password)
        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        await userDatabase.createUser(user)
        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = authenticator.generateToken(payload)

        const response = {
            token
        }

        return response
    }

    public login = async (input: any) => {
        const email=input.email
        const password = input.password
   
        if(!email || !password) {
            throw new Error ("email ou senha inválidos")
        }
    
        const user = userDatabase.logUser(email)
    
        if(!user) {
            throw new Error("The user does not exist")
        }
    
        const validationPassword: boolean = await hashManager.compare(password, (await user).password)
    
        if(!validationPassword) {
            throw new Error("Invalid Password")
        }
    
        const token = authenticator.generateToken({
            id:(await user).id,
            role: (await user).role
        })
    
        return token
    }

    public listusers = async (token: string) => {
        if(!token) {
            throw new Error("Invalid token")
        }
        const response = userDatabase.getUsers()
    
        return response
    }

    public deleteUser = async (input:any) => {
        const token = input.token
        const id = input.id
        const user = authenticator.getTokenPayload(token)

        if(!token){
            throw new Error("Parâmetro 'token' inválido")
        }
  
        if(!id) {
            throw new Error("Parâmetro 'id' inválido")
        }
  
        if(user.role !== "ADMIN") {
          throw new Error("somente Administradores pode deletar usuários")
        }
        
        const response = userDatabase.deleteUserById(id)
        return response
    }
}