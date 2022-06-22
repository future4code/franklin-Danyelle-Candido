import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goToLogin,goToProducts } from '../../router/coordinator'

const HomeContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color: green;
`

function HomePage() {
  
  const navigate = useNavigate()

  return (
    <HomeContainer >
      <p>Home Page</p>
      <button onClick={()=>goToLogin(navigate)}>Login</button>
      <button onClick={()=>goToProducts(navigate)}>Produtos</button>
    </HomeContainer>
  );
}

export default HomePage;