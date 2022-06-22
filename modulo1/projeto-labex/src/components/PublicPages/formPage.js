import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {goBack,goToProducts } from '../../router/coordinator'

const FormContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:palevioletred;
`


function ApplicationFormPage() {

  const navigate = useNavigate()

  return (
    <FormContainer >
      <p>Application Form</p>
      <button onClick={()=>goBack(navigate)}>voltar</button>
      <button onClick={()=>goToProducts(navigate)}>Enviar</button>
    </FormContainer>
  );
}

export default ApplicationFormPage;
