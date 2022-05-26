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
                    <MenuItemComponent ItemTitle={'Inscrições'}/> 
                    <hr/>
                    <MenuItemComponent ItemTitle={'Originais'}/>
                    <MenuItemComponent ItemTitle={'Histórico'}/> 
                </ul>
            </nav>

            <section className="painel-de-videos">
                <CardVideoComponent local={'box-pagina-principal media1'} Url={'https://picsum.photos/400/400?a=1'} VideoTitle={'Terror'}/>//aqui estou usando o componente cardvideo e passando 3 parametros para ele 
                <CardVideoComponent local={'box-pagina-principal media2'} Url={'https://picsum.photos/400/400?a=2'} VideoTitle={'Animação'}/>
                <CardVideoComponent local={'box-pagina-principal media3'} Url={'https://picsum.photos/400/400?a=3'} VideoTitle={'Amor'}/>//aqui estou usando o componente cardvideo e passando 3 parametros para ele 
                <CardVideoComponent local={'box-pagina-principal media4'} Url={'https://picsum.photos/400/400?a=4'} VideoTitle={'Comédia'}/>
                <CardVideoComponent local={'box-pagina-principal media5'} Url={'https://picsum.photos/400/400?a=5'} VideoTitle={'Vida'}/>//aqui estou usando o componente cardvideo e passando 3 parametros para ele 
                <CardVideoComponent local={'box-pagina-principal media6'} Url={'https://picsum.photos/400/400?a=6'} VideoTitle={'Diversos'}/>
                <CardVideoComponent local={'box-pagina-principal media7'} Url={'https://picsum.photos/400/400?a=7'} VideoTitle={'Geek'}/>//aqui estou usando o componente cardvideo e passando 3 parametros para ele 
                <CardVideoComponent local={'box-pagina-principal media8'} Url={'https://picsum.photos/400/400?a=8'} VideoTitle={'Documentário'}/>              
           </section>
        </main>
        <Footer/>
      </div>
  );
}

export default App;