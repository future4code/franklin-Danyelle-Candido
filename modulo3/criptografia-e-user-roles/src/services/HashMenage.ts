import { genSalt, hash, compare } from "bcryptjs"

export class HashMenage {
    public hash = async(password:string) =>{
        const round = Number("12")
        const salt = await genSalt(round)
        const result =await hash(password,salt)
        return result
    }
    
    public compare = async(password:string,hash: string) =>{
        const result = await compare(password,hash)
        return result
    }
}