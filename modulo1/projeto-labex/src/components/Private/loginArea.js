import React from "react";
import styled from "styled-components";
import AdmArea from "./admArea";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center; 
  flex-direction: column; 
  align-items: center;
  background-color:violet;
`


function LoginArea() {
  return (
    <LoginContainer >
      <p>Área de Login</p>
    </LoginContainer>
  );
}

export default LoginArea;
