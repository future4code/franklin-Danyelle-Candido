import React from "react";
import styled from "styled-components";
import backgroundImage from './assets/backgroundImage.jpg';
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
      </MainContainer>
      <Footer/>
    </div>
  );
}

export default App;
