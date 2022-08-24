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
//////
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

app.get("/users/:id", async (req: Request, res: Response) => {
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

//Exo2
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
//Exo3
    app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await getActorById(id);

        res.status(200).send(actor)
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });

    app.get("/actor", async (req: Request, res: Response) => {
    try {
        const count = await countActors(req.query.gender as string);
        res.status(200).send({
        quantity: count,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });

//Exo4
    app.put("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalary(req.body.id, req.body.salary);
        res.status(200).send({
        message: "Success",
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });

    app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id);
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });
//Exo5
    const createMovie = async (
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    playingLimitDate: Date
    ) => {
    await connection
        .insert({
        id: id,
        title: title,
        synopsis: synopsis,
        releas_date: releaseDate,
        playing_limit_date: playingLimitDate,
        })
        .into("Movie");
    };

    app.post("/movie", async (req: Request, res: Response) => {
    try {
        await createMovie(
        req.body.id,
        req.body.title,
        req.body.synopsis,
        req.body.releaseDate,
        req.body.playingLimitDate
        );

        res.status(200).send({
        message: "Success"
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });

// Exo6
    const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Movie LIMIT 15
    `);

    return result[0];
    };

    app.post("/movie/:id", async (req: Request, res: Response) => {
    try {
        const movies = await getAllMovies();

        res.status(200).send({
        movies: movies,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });

    app.get("/movie/search", async (req: Request, res: Response) => {
    try {
        const movies = await searchMovie(req.query.query as string);

        res.status(200).send({
        movies: movies,
        });
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });
