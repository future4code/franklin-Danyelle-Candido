import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goToCreateTrip , goToDetailsTrip1 , goToDetailsTrip2 , goBack } from '../../router/coordinator';

const AdmContainer = styled.div`
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
      <p>Area administrativa </p>
      <button onClick={() => goToCreateTrip(navigate)}>Criar viagem</button>
      <button onClick={() => goToDetailsTrip1(navigate)}>Ver detalhes da viagem 1</button>
      <button onClick={() => goToDetailsTrip2(navigate)}>Ver detalhes da viagem 2</button>

      <button onClick={()=>goBack(navigate)}>voltar</button>
    </AdmContainer>
  );
}

export default AdmAreaPage;
