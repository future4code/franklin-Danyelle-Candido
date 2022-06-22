import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";

const TripDetailsContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:blueviolet;
`
function TripDetailsPage() {

  const navigate = useNavigate()

  const goBack = () =>{
    navigate(-1)
  }



  return (
    <TripDetailsContainer >
      <p>Trip Details</p>
      <button onClick={goBack}>voltar</button>
    </TripDetailsContainer>
  );
}

export default TripDetailsPage;
