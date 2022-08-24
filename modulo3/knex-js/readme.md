## Exo1
### a)
 Quando usamos raw  ele vai trazer um array com oque pedimos na posição 0 e diversos outros dados nas demais posições, por isso passamos a posição que queremos no result 
### b)

    const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
    }
### c)

    const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
    };

## Exo2
### a)
    const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
        salary: salary,
        })
        .where("id", id);
    };
### b)
    const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id);
    }; 
### c)
    const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0].average;
    };
## Exo3
### a)
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
### b)
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

## Exo4
### a)
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
### b)
    app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id);
    } catch (err) {
        res.status(400).send({
        message: err.message,
        });
    }
    });
## Exo5
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

## Exo6
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

## Exo7
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
