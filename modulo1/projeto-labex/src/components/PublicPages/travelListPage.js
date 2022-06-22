import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";

const TravelContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color: green;
`

function TravelListPage() {
  
  const navigate = useNavigate()

  const goBack = () =>{
    navigate(-1)
  }

  const goSingUp = () =>{
    navigate('/trips/application')
  }

  return (
    <TravelContainer >
      <p>Travel List</p>
      <button onClick={goBack}>voltar</button>
      <button onClick={goSingUp}>cadastrar-se</button>
    </TravelContainer>
  );
}

export default TravelListPage;
