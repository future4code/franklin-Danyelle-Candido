import React from "react";
import styled from "styled-components";
import backgroundImage from './assets/backgroundImage.jpg';
import TravelList from "./components/Public/travelList";
import AdmArea from "./components/Private/admArea";
import Footer from "./components/static/footer";
import Header from "./components/static/header";

const MainContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-image: url(${backgroundImage});
  color: white;
  height: 90vh;
`


function App() {
  return (
    <div>
      <Header/>
      <MainContainer >
        <TravelList/>
        <AdmArea/>
      </MainContainer>
      <Footer/>
    </div>
  );
}

export default App;
