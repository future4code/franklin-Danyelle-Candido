import express, { Request, Response} from 'express'
import cors from 'cors'
import { users } from "./data"
//importando meu arquivo data


//Labefy

//configurando
const app = express()
app.use(express.json())
app.use(cors())

//configurando a porta
app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})//aqui  eu falo que meu app esta escutando (rodando) na porta 3003 e faço uma arrow function callback mostrando onde ele esta rodando

//types
type Tracks = {
    id:string,
    name:string,
    artist:string,
    url:string
}


//endpoints


//Get All Playlists

app.get('/playlists',(request:Request,response:Response)=>{

    const currentUsers = users // array de objetos
    console.log(1, currentUsers);
    
    const userPlaylists = currentUsers.map((user: any) => {
        return user.playlists 
      }) // array de arrays
      console.log(2, userPlaylists)
    
    const result = userPlaylists.flat(1)

    const token = request.headers.authorization
    
    if(!token){
        response.status(401).send({message:'Unauthorized'})
        
    }
    response.status(200).send(result)   
})

/* 
//Get Playlist Tracks

app.get('/playlists/:playlistId/tracks',(request:Request,response:Response)=>{
    
    const token = request.headers.authorization
    
    const playlistTrackId = Number(request.params.id)
    const trackId = [{id:1,playlist:'Samba'},{id:2,playlist:'Reggae'}]
    
    const acharTrack= trackId.find((track)=>{
        return track.id === playlistTrackId
    })
    if(!token){
        response.status(401).send({message:'Unauthorized'})
        
    }else if(!acharTrack){
        response.status(401).send({message:'Unauthorized'})
    }
    response.status(200).send({
        "result": {
            "quantity": "number",
            "tracks": [ 
                {
                    "id": "string", 
                    "name": "string", 
                    "artist": "string",
                    "url": "string"
                }
            ]
        }
    })

    
})
//Delete Playlist

app.delete('/playlists/:playlistId',(request:Request,response:Response)=>{
    
    const token = request.headers.authorization
    
    const playlistId = Number(request.params.id)
    const arrayId = [{id:1,playlist:'Samba'},{id:2,playlist:'Reggae'}]
    
    const acharPlaylist= arrayId.find((playlist)=>{
        return playlist.id === playlistId
    })


    if(!token){
        response.status(401).send({message:'Unauthorized'})
        
    }else if(!acharPlaylist){
        response.status(401).send({message:'Unauthorized'})
    }
    response.status(200).send({message:'Deleted Playlist'})

})

//Delete Track
app.delete('playlists/:playlistId/tracks/:trackId',(request:Request,response:Response)=>{
    
    const token = request.headers.authorization
    
    const playlistId = Number(request.params.id)
    const arrayId = [{id:1,playlist:'Samba'},{id:2,playlist:'Reggae'}]
    
    const acharPlaylist= arrayId.find((playlist)=>{
        return playlist.id === playlistId
    })

    const playlistTrackId = Number(request.params.id)
    const trackId = [{id:1,musica:'Clayton Rasta'},{id:2,musica:'Cabeça de Gelo'}]
    
    const acharTrack= trackId.find((track)=>{
        return track.id === playlistTrackId
    })

    if(!token){
        response.status(401).send({message:'Unauthorized'})
        
    }else if(!acharPlaylist || !acharTrack){
        response.status(401).send({message:'Unauthorized'})
    }
    response.status(200).send({message:'Deleted track'})

}) */

//buscando playlist por Id
app.get('/playlists/:id',(request:Request,response:Response)=>{

    const token = request.headers.authorization

    if(!token){
        response.status(401).send({message:'Unauthorized'}) 
    }//verifico se há autorização

    const id = request.params.id
    //recebe o id como parametro
    const findPlaylist = users.filter((user:any)=>{
        return user.id === id
    })//aqui eu percorro o array user e peço para me retornar algo quando o user.id for igual o id que estou passando 

    response.status(200).send(findPlaylist)   
})


  app.get("/tracks", (req, res) => {
    const playlistId = req.query.id
  
    if(!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")
  
    const allPlaylists = users.map((user: any) => {
      return user.playlists
    }).flat(1)
  
    let tracks;
  
    allPlaylists.forEach((playlist: any) => {
      if (playlist.id === playlistId) {
        tracks = playlist.tracks
      }
    })
  
    res.status(200).send(tracks)
  })

  //criar playlist
  app.post("/createPlaylist/:id",(request:Request,response:Response)=>{
    const idPerson = request.params.id
    //insiro o id da pessoa que vai receber a playlist
    
    const {id,name} = request.body
    //nome e id da playlist a ser incluida

    const tracks:Tracks[] =[] 
    //aqui são as musicas da playlist que ainda não tenm nenhuma

    const findPersonPlaylist = users.find((user)=>{
        return user.id === idPerson
    })//procuro a pessoa


   findPersonPlaylist?.playlists.push({id,name,tracks})
    //incluir na nova playlist na lista deste user 
   response.status(201).send(findPersonPlaylist)
   //mostrar playlist
  })

//add musica na playlist
  app.post("/createTrack/:id",(request:Request,response:Response)=>{
    const idPerson =request.params.id
    //id da pessoa
    const {idPlaylist} = request.query//é importante lembrar que o nome da variavel deve ser igual ao nome n0 postman 
    //aqui como query eu pego o id da playlist
    const { id, name, artist, url } = request.body
    //e aqui tudo oque eu preciso que sera enviado no meu body referente a musica 
    const [findPerson] = users.filter((user)=>{
        return user.id===idPerson
    })
    //encontrar a pessoa

    const findPlaylist = findPerson.playlists.filter((play)=>{
      if(play.id===idPlaylist){
        play.tracks.push({id,name,artist,url})
        return true
      }
    })
    //encontrar playlist e adicionar meu body nesta playlist
    response.send(findPlaylist)
  })

  
  app.delete("/playlist", (req, res) => {
    const id = req.query.id
  
    users.forEach((user) => {
      user.playlists = user.playlists.map((playlist: any) => {
        if (playlist.id === id) {
          return {}
        }
        return playlist
      });
    })
  
    res.status(200).send(users)
  })
  
  app.delete("/track", (req, res) => {
    const trackId = req.query.trackId
    const playlistId = req.query.playlistId
  
    const allPlaylists = users
      .map((user: any) => {
        return user.playlists;
      })
      .flat(1);
    for (let i = 0; i < = allPlaylists.toLocaleString; i++) {
      allPlaylists[i]
    }
  
    for (let playlist of allPlaylists) {
      playlist
    }
  
    allPlaylists.forEach((playlist: any) => {
      if (playlist.id === playlistId) {
         playlist.tracks = playlist.tracks.map((track: any) => {
           if (track.id === trackId) {
             return {};
           }
           return track;
         });
      }
    })
  
    res.status(200).send(allPlaylists)
  })


