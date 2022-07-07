import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goToCreateTrip , goToLogin , goBack } from '../../router/coordinator';

const AdmContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:pink;
`
const optionsContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:pink;
`


function AdmAreaPage() {

  const navigate = useNavigate()

  return (
    <AdmContainer >
      <h1>Painel de Controle de Viagens </h1>
      <optionsContainer>
        <button onClick={()=>goBack(navigate)}>voltar</button>
        <button onClick={() => goToCreateTrip(navigate)}>Criar viagem</button>
        <button onClick={() => goToLogin(navigate)}>Logout</button>
      </optionsContainer>
    </AdmContainer>
  );
}

export default AdmAreaPage;
