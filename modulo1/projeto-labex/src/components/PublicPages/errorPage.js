import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goBack } from '../../router/coordinator'

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:pink;
`

function ErrorPage() {

  const navigate = useNavigate()

  return (
    <ErrorContainer >
      <p>Error 404: essa página não existe </p>
      <button onClick={()=>goBack(navigate)}>voltar</button>
    </ErrorContainer>
  );
}

export default ErrorPage;