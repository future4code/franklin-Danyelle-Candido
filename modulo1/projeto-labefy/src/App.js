import './App.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="cabecalho">
        <h1>Labefy</h1>
        <nav>
          <button>Playlists</button>
          <button>Criar Playlist</button>
        </nav>
      </header>

      <main className="corpoSite">
        <p>Incrementar playlist:</p>
        <input type="" placeholder='pesquisas' />
      </main>
      
      <footer className="rodape">
          <button>Anterior</button>
          <button>play/Pause</button>
          <button>proxima</button>
      </footer>
    </div>
  );
}

export default App;