import { Request,Response } from "express";
import app from "./app";
import connection from "./connection";

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
    }

const countActors = async (gender: string): Promise<any> => {
        const result = await connection.raw(`
            SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `);
        const count = result[0][0].count;
        return count;
    };

const updateActor = async (id: string, salary: number): Promise<any> => {
        await connection("Actor")
            .update({
            salary: salary,
            })
            .where("id", id);
    };

const deleteActor = async (id: string): Promise<void> => {
        await connection("Actor")
            .delete()
            .where("id", id);
        }; 

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
         .avg("salary as average")
        .where({ gender });
        
        return result[0].average;
    };

const createMovie = async (
        id: string,
        title: string,
        synopsis: string,
        releaseDate: Date,
        rating: number
        ) => {
        await connection
            .insert({
            id: id,
            title: title,
            synopsis: synopsis,
            release_Date: releaseDate,
            rating: rating,
            })
            .into("Movies");
        };

const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Movies LIMIT 15
    `);    
    return result[0];
};
        

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

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error) {
		console.log(error)
    res.status(500).send("Unexpected error")
  }
}) 

//exo1

app.get("/actors/:name", async (req: Request, res: Response) => {
        try {
          const name = req.params.name
      
          console.log(await searchActor(name))
      
          res.end()
        } catch (error) {
              console.log(error)
          res.status(500).send("Unexpected error")
        }
      }) 

app.get("/actors/:gender", async (req: Request, res: Response) => {
        try {
          const gender = req.params.gender
      
          console.log(await countActors(gender))
      
          res.end()
        } catch (error) {
              console.log(error)
          res.status(500).send("Unexpected error")
        }
      }) 

//Exo2


app.put ("/actor/edit/:id",async(req:Request,res:Response)=>{
        try{
            const id = req.params.id
            const salary = req.body.salary

            console.log(await updateActor(id, salary))
      
        }catch(error){
            console.log(error)
            res.status(500).send("An unexpected error occurred")
        }
    })

app.delete ("/actor/:id",async(req:Request,res:Response)=>{
        try{
            const id = req.params.id
            console.log(await deleteActor(id))   
        }catch(error){
            console.log(error)
            res.status(500).send("An unexpected error occurred")
        }
    })


app.get("/actors/:gender", async (req: Request, res: Response) => {
        try {
          const gender = req.params.gender
      
          console.log(await avgSalary(gender))
      
          res.end()
        } catch (error) {
              console.log(error)
          res.status(500).send("Unexpected error")
        }
      }) 

//Exo3
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (error) {
        res.status(400).send({
        message: error,
        });
    }
    });

app.get("/actor", async (req: Request, res: Response) => {
    try {
        //variavel countActors voi declarada na linha 116
        const count = await countActors(req.query.gender as string);
        res.status(200).send({
        quantity: count,
        });
    } catch (error) {
        res.status(400).send({
        message: error,
        });
    }
    });

//Exo4
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
            salary:req.body.salary
        }).where({
            id:req.params.id
        })
        res.send("Salario atualizado")

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id);
    } catch (error) {
        res.status(400).send({
        message: error,
        });
    }
    });
//Exo5
app.post("/movie", async (req: Request, res: Response) => {
    try {
        await createMovie(
        req.body.id,
        req.body.title,
        req.body.synopsis,
        req.body.releaseDate,
        req.body.rating
        );

        res.status(200).send({
        message: "Success"
        });
    } catch (err) {
        res.status(400).send({
        message: err,
        });
    }
    });

// Exo6


app.post("/movies", async (req: Request, res: Response) => {
    try {
        const movies = await getAllMovies();

        res.status(200).send({
        movies: movies,
        });
    } catch (err) {
        res.status(400).send({
        message: err,
        });
    }
    });

app.get("/movie/search", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
        SELECT * FROM Movies
        WHERE title LIKE "%${req.query.id}%"  ORDER BY rating ASC;`
        )

        res.status(200).send(result[0]);
    } catch (err) {
        res.status(400).send({
        message: err,
        });
    }
    });
