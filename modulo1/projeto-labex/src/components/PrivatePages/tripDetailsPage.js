import React from "react";
import styled from "styled-components";
import {useNavigate, useParams } from "react-router-dom";
import {goBack } from '../../router/coordinator'

const TripDetailsContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:blueviolet;
`
function TripDetailsPage() {

  const navigate = useNavigate()
  const {id} = useParams()

  return (
    <TripDetailsContainer >
      {id==1 ? 
      <div><p>Trip Details 1</p> <button onClick={()=>goBack(navigate)}>voltar</button></div>
      :
      <div><p>Trip Details 2</p><button onClick={()=>goBack(navigate)}>voltar</button></div>}
    </TripDetailsContainer>
  );
}

export default TripDetailsPage;
