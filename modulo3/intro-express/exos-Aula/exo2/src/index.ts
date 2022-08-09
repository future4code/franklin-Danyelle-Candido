import express, { Request, Response} from 'express'
import cors from 'cors'

//Labefy

//configurando
const app = express()
app.use(express.json())
app.use(cors())


//Get All Playlists

app.get('/playlists',(request:Request,response:Response)=>{

    const token = request.headers.authorization
    
    if(!token){
        response.status(401).send({message:'Unauthorized'})
        
    }
    response.status(200).send({
        "result": {
            "quantity": "number",
            "list": [
                {
                    "id": "string",
                    "name": "string"
                }
            ]
        }
    })   
})


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

})

app.listen(3003,()=>{
    console.log("Server is running in http://localhost:3003")
})//aqui  eu falo que meu app esta escutando (rodando) na porta 3003 e faço uma arrow function callback mostrando onde ele esta rodando

