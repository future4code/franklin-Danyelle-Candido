import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"
import { HashMenage } from "./services/HashMenage"

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.get('/user/profile', getProfile)

/* const hashMenage = new HashMenage()

const tes = async () =>{
const senha = "123456"
const senhaTentatica = "123456"

const hash = await hashMenage.hash(senha)
console.log(hash)
const senhaCorreta = await hashMenage.compare(senhaTentatica, hash)
console.log("senhaCorreta",senhaCorreta)
}

tes() */
