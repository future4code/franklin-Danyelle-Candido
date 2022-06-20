import axios from "axios";
import React, {useEffect, useState } from 'react';
import './App.css';

const App=()=> {
  const [inputNomeNovaPlaylist, setInputNomeNovaPlaylist] = useState('');
  const [playlist, setPlaylist] = useState([]);

  const criarPlaylist = () => { 
    const body = {
      name: inputNomeNovaPlaylist
    }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',body,
        { headers: { Authorization: 'danyelle-candido-franklin' } }
      )
      .then(response => {
        alert(`Playlist criada com sucesso`);
        console.log(response);
        getAllPlaylist();
        setInputNomeNovaPlaylist('');
      }).catch(error => console.log(error.message));
  };

  const getAllPlaylist = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        { headers: { Authorization: 'danyelle-candido-franklin' } }
      )
      .then(response => {
        setPlaylist(response.data.result.list);
      }).catch(error => console.log(error.message));
  };

  const removePlaylist = (id, name) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: { Authorization: 'danyelle-candido-franklin' }
        }
      ).then(response => {
        alert(`Playlist deletada com sucesso`);
        getAllPlaylist();
        console.log(response);
      }).catch(error => console.log(error));
  };

  const handleInputNomeNovaPlaylist = (e) => {
    setInputNomeNovaPlaylist(e.target.value);
  };

  useEffect(getAllPlaylist, []);

  return (
    <div className="App">
      <h1>Minhas playlists</h1>
      {playlist.map(playlist => {
          return (
            <li key={playlist.id} >
              {playlist.name}
              <button onClick={() => removePlaylist(playlist.id, playlist.name)}>x</button>
            </li>
          );
        })}

        <br/>
        <input onChange={handleInputNomeNovaPlaylist} value={inputNomeNovaPlaylist} />
        <button onClick={criarPlaylist}>Criar nova playlist</button>

    </div>
  );
}

export default App;