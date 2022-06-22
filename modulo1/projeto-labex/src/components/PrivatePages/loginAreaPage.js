import React from "react";
import {useNavigate } from "react-router-dom";
import styled from "styled-components";
import {goBack , goToAdmArea } from '../../router/coordinator'

const LoginContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:violet;
`

function LoginAreaPage() {

  const navigate = useNavigate()

  return (
    <LoginContainer >
      <p>Área de Login</p>
      <button onClick={()=>goToAdmArea(navigate)}>entrar</button>
      <button onClick={()=>goBack(navigate)}>voltar</button>
    </LoginContainer>
  );
}

export default LoginAreaPage;
