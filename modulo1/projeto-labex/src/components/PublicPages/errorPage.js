import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";
import {goBack } from '../../router/coordinator';
import error from '../../assets/error.jpg';

const ErrorPageContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-image:url(${error});
  height: 85vh;
  width: 100vw;
`
const ErrorContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color: black;

`

function ErrorPage() {

  const navigate = useNavigate()

  return (
    <ErrorPageContainer >
      <ErrorContainer>
        <p>Error 404: essa página não existe </p>
        <button onClick={()=>goBack(navigate)}>voltar</button>
      </ErrorContainer>
    </ErrorPageContainer>
  );
}

export default ErrorPage;