import './App.css';
import Header from './components/estaticos/header';
import { Footer } from './components/estaticos/footer';
import CardVideoComponent from './components/CardVideoComponent';
import { MenuItemComponent } from './components/MenuItemComponent';

function App() {
  return (
    <div className="App">
      <Header/>
        <main>
            <nav className="menu-vertical">
                <ul>
                    <MenuItemComponent ItemTitle={'inicio'}/> 
                    <MenuItemComponent ItemTitle={'Em alta'}/>

                </ul>
            </nav>

            <section className="painel-de-videos">
                <CardVideoComponent local={'box-pagina-principal media1'} Url={'https://picsum.photos/400/400?a=1'} VideoTitle={'Terror'}/>//aqui estou usando o componente cardvideo e passando 3 parametros para ele 
                <CardVideoComponent local={'box-pagina-principal media2'} Url={'https://picsum.photos/400/400?a=2'} VideoTitle={'Animação'}/>
              
           </section>
        </main>
        <Footer/>
      </div>
  );
}

export default App;