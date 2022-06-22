import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";

const AdmContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:pink;
`

function AdmAreaPage() {

  const navigate = useNavigate()

  const goBack = () =>{
    navigate(-1)
  }

  const goToCreateTrip = () =>{
    navigate('/adm/createtrip')
  }

  const goToDetaisTrip = () =>{
    navigate('/adm/detailstrips')
  }

  return (
    <AdmContainer >
      <p>Area administrativa </p>
      <button onClick={goToCreateTrip}>Criar viagem</button>
      <button onClick={goToDetaisTrip}>Ver detalhes da viagem</button>
      <button onClick={goBack}>voltar</button>
    </AdmContainer>
  );
}

export default AdmAreaPage;
