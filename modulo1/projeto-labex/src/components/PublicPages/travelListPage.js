import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goBack ,goSingUp } from '../../router/coordinator'

const TravelContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color: green;
`

function TravelListPage() {
  
  const navigate = useNavigate()
  
  return (
    <TravelContainer >
      <p>Travel List</p>
      <button onClick={()=>goBack(navigate)}>voltar</button>
      <button onClick={()=>goSingUp(navigate)}>cadastrar-se</button>
    </TravelContainer>
  );
}

export default TravelListPage;
