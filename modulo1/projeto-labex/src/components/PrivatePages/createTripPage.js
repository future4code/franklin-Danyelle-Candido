import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goBack } from '../../router/coordinator'


const CreateTripContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:blue;
`


function CreateTripPage() {
  const navigate = useNavigate()

  return (
    <CreateTripContainer >
      <p>Create Trip Container</p>
      <button onClick={()=>goBack(navigate)}>voltar</button>
    </CreateTripContainer>
  );
}

export default CreateTripPage;
