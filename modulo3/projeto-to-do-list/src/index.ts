import app from "./app";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getUserById from "./endpoints/getUserById";

app.post('/user',createUser)
app.get('/user/:id',getUserById)
app.put('/user/edit/:id',editUser)