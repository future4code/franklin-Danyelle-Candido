import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:violet;
`

function LoginAreaPage() {

  const navigate = useNavigate()

  const goBack = () =>{
    navigate(-1)
  }

  const goToAdmArea = () =>{
    navigate('/adm')
  }
  

  return (
    <LoginContainer >
      <p>Área de Login</p>
      <button onClick={goToAdmArea}>entrar</button>
      <button onClick={goBack}>voltar</button>
    </LoginContainer>
  );
}

export default LoginAreaPage;
