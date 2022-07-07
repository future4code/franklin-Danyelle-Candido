import React from "react";
import styled from "styled-components";
import Footer from "./components/static/footer";
import Header from "./components/static/header";
import Router from "./router/Router";

const GlobalContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  background-color: black;
  color: white;
  font-size: 30px;
`

const MainContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  background-color: black;
  color: white;
  height: 42vw;
  font-size: 30px;
`


function App() {
  return (
    <GlobalContainer>
      <Header/>
      <MainContainer >
        <Router/>
      </MainContainer>
      <Footer/>
    </GlobalContainer>
  );
}

export default App;
