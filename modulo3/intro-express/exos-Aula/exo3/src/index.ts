import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './data';

const app = express();

app.use(express.json());
app.use(cors());

// -----------------------------------




// todos usuarios
app.get("/users/allUser", (req, res) => {
    res.send('retornando todos os usarios')
})

// trazer um usuario especifico
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id)
    res.send(`o usuario ${id} foi encontrado`)
})

//retorna playlist
app.get('/playlists', (req, res) => {
    // vai retornar todas as playlists

    const playlists = users.map((user) => {
        return user.playlists;
    })

    const resultado = playlists.flat(1);

    // flat faz isso aqui > [1, [2, 3], 4] = [1, 2, 3, 4]

    res.send(resultado);
});

//retorna playlist por pessoa
app.get('/playlists/:id', (req, res) => {
    const id = req.params.id

    const findPlaylist = users.filter(
        (user) => {
            //    if(user.id === id){
            //        return true
            //    }

            return user.id === id
        })

    res.status(200).send(findPlaylist)
})

//cria playlist
app.post('/createPlaylist/:id', (req, res) => {
    type Tracks = {
        id: string,
        name: string,
        artist: string,
        url: string
    }
    type NewPlaylist = {
        id: string,
        name: string,
        tracks: Tracks[]
    }

    const idPerson = req.params.id
    const { id, name, tracks }: NewPlaylist = req.body

    // sem tipagem
    // const { id, name } = req.body
    // const tracks: Tracks[] = []

    const findPlaylist = users.find((user) => {
        return user.id === idPerson
    })

    const newPlaylist = {
        id,
        name,
        tracks
    }

    findPlaylist?.playlists.push(newPlaylist)

    res.status(201).send(findPlaylist)
})

//cria musica na playlist
app.post('/createTrack/:id', (req, res) => {
    const idPerson = req.params.id
    const { idPlaylist } = req.query

    const { id, name, artist, url } = req.body

    // achar a pessoa dentre varias
    const [findPerson] = users.filter((user) => {
        return user.id === idPerson
    })

    // Achar a playlist da minha pessoa
    const findPlaylist = findPerson.playlists.filter((play) => {
        if(play.id === idPlaylist){
            play.tracks.push({id,name,artist,url})
            return true
        }
    })

    res.send(findPlaylist)

})
//pega musicas da playlist
app.get('/tracks', (req, res) => {
    // vai retornar todas as tracks

    const playlists = users.map((user) => {
        return user.playlists
    }).flat(1);

    // peguei as playlists

    const tracks = playlists.map((playlist) => {
        return playlist.tracks;
    }).flat(1);

    // peguei as tracks das playlists e juntei em um array

    res.send(tracks);
});
//deletar playlists
app.delete("/playlists/:userId", (req: Request, res: Response) => {
    // deletar as playlists

    const userId = req.params.userId;

    const dadosAtualizados = users.map((user) => {
        if (user.id === userId) {
            return {
                ...user,
                playlists: []
            }
        } else {
            return user;
        }
    });

    res.send(dadosAtualizados);
});
//deletar musica
app.delete('/tracks/:playlistId', (req, res) => {
    //deletar as tracks
    const playlistId = req.params.playlistId;

    const dadosAtualizados = users.map((user) => {
        return user.playlists.map((playlist) => {
            if (playlist.id === playlistId) {
                return {
                    ...playlist,
                    tracks: []
                }
            } else {
                return playlist
            }
        })
    });


    res.send(dadosAtualizados);
});


app.listen(3003, function () {
    console.log("Server is running in locahost:3003 !");
});





