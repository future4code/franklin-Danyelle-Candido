import app from "./app";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import login from "./endpoints/login";
import Authenticator from "./services/Authenticator";
import { authenticationData } from "./type";

const authenticator = new Authenticator()

const payload: authenticationData = {
    id:"id-bananinha"
}

console.log(authenticator.generateToken(payload))

app.post('/user/signup', createUser)
app.post('/user/login',login)
app.put('/user/edit/', editUser)
