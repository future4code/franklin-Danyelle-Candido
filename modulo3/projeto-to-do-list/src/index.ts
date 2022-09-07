import app from "./app";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getAllUsers from "./endpoints/getAllUsers";
import getTask from "./endpoints/getTaskBy";
import getTaskByUserId from "./endpoints/getTaskByUserId";
import getUserById from "./endpoints/getUserById";


app.get('/user/all',getAllUsers)
app.get('/user/:id',getUserById)
app.get('/task/:id',getTask)
app.get('/task',getTaskByUserId)
app.post('/user',createUser)
app.post('/task',createTask)
app.put('/user/edit/:id',editUser)

