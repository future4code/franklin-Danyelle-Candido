import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";



const HomeContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color: green;
`

function HomePage() {
  
  const navigate = useNavigate()

  const goToLogin= ()=>{
    navigate('/login')
  } 

  const goToProducts= ()=>{
    navigate('/trips')
  } 


  return (
    <HomeContainer >
      <p>Home Page</p>
      <button onClick={goToLogin}>Login</button>
      <button onClick={goToProducts}>Produtos</button>
    </HomeContainer>
  );
}

export default HomePage;