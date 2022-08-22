import { Request,Response } from "express";
import app from "./app";
import connection from "./connection";

app.get("/actors",async (req:Request,res:Response)=>{
    try{
        //const result = await connection.raw(`select id, name from Actor`)
        const result = await connection("Actor")
        console.log(result);
        res.send(result)
    }catch(error){
        console.log(error)
    }
});

app.post ("/actor",async(req:Request,res:Response)=>{
    try{
        await connection.raw(`
            INSERT INTO Actor 
            (id, name,salary, birth_date, gender)
            VALUES(
                ${Date.now().toString()},
                "${req.body.name}",
                ${req.body.salary},
                "${req.body.birthDate}",
                "${req.body.gender}"
            )
        `)
    }catch(error){
        console.log(error)
    }
})

app.put ("/actor/:id",async(req:Request,res:Response)=>{
    try{
        await connection("Actor").update({
            name:req.body.name,
            salary:req.body.salary,
            birth_date:req.body.birthDate,
            gender:req.body.gender,
        }).where({
            id:req.params.id
        })
        res.send("Sucesso")
    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
})

app.delete ("/actor/:id",async(req:Request,res:Response)=>{
    try{
       const linhasDeletadas= await connection("Actor")
        .delete()
        .where({
            id:req.params.id
        })
        if(linhasDeletadas===0){
            throw new Error();
            
        }

        res.send("Deletado Sucesso")
    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
})