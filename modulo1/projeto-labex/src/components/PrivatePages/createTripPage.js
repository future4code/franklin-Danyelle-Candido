import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";


const CreateTripContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:blue;
`


function CreateTripPage() {
  const navigate = useNavigate()

  const goBack = () =>{
    navigate(-1)
  }

  return (
    <CreateTripContainer >
      <p>Create Trip Container</p>
      <button onClick={goBack}>voltar</button>
    </CreateTripContainer>
  );
}

export default CreateTripPage;
