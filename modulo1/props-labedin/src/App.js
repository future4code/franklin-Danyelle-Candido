import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ContactCard from './components/ContactCard/ContactCard';
import ImagemButton from './components/ImagemButton/ImagemButton';
import logo from './logo.gif';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">

        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={logo} 
          nome="Danyelle Amarante Candido" 
          descricao="Olá sou a Danyelle Amarante Cândido , tenho 26 anos moro na Zona Leste de SP.
          Iniciei minha carreira aos 16 anos , trabalhei com comércios , administração e engenharia civil.Sou formada em engenharia ,  formada no Bootcamps da Generation (Java Web) e sou Desenvolvedora Jr. no grupo boticário
          Ficou com alguma duvida? me envie uma mensagem !
          Obrigada"
        />
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/4889/premium/4889248.png?token=exp=1653578898~hmac=24ae1f0878fa018225eaaac662044eac" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <ContactCard
          imagem="https://cdn-icons-png.flaticon.com/512/7586/7586672.png" 
          contactType="E-mail" 
          contactLog="danyelleacandido@gmail.com" 
        />
        
        <ContactCard
          imagem="https://cdn-icons.flaticon.com/png/512/5055/premium/5055653.png?token=exp=1653579346~hmac=e4d173e17264df75e79f097cc38ad3b3" 
          contactType="Endereço" 
          contactLog="R. das Flores,0." 
        />
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://picsum.photos/400/400?a=1" 
          nome="Desenvolvedora Jr.-Grupo Boticário" 
          descricao="Entrei através do programa desenvolve, no periodo da manhã faço um curso na Labenu e a tarde trabalho com a equipe." 
        />
        
        <CardGrande 
          imagem="https://picsum.photos/400/400?a=2" 
          nome="Bootcamp Dev Java Web-Generation" 
          descricao="Neste bootcamp com duração de 3 meses aprendi sobre front e backend usando Java e React(material UI)." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/1400/1400486.png" 
          texto="LinkedIn" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/4494/premium/4494756.png?token=exp=1653579297~hmac=e7232cbd9472126fb43df9eae644df8c" 
          texto="Github" 
        />        
      </div>
    </div>
  );
}

export default App;
