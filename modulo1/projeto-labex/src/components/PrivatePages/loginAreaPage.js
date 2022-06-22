import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:violet;
`


function LoginAreaPage() {
  return (
    <LoginContainer >
      <p>Área de Login</p>
    </LoginContainer>
  );
}

export default LoginAreaPage;
