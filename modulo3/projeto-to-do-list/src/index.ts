import app from "./app";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getTask from "./endpoints/getTaskBy";
import getUserById from "./endpoints/getUserById";

app.get('/user/:id',getUserById)
app.get('/task/:id',getTask)
app.post('/user',createUser)
app.post('/task',createTask)
app.put('/user/edit/:id',editUser)