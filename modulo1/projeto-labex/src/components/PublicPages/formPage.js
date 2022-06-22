import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:palevioletred;
`


function ApplicationFormPage() {

  const navigate = useNavigate()

  const goBack = () =>{
    navigate(-1)
  }
  return (
    <FormContainer >
      <p>Application Form</p>
      <button onClick={goBack}>voltar</button>
    </FormContainer>
  );
}

export default ApplicationFormPage;
