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
  useUnprotectedPage()
  const navigate = useNavigate()
  return (
      <ScreenContainer>
          <LogoImage src={'#'} />
          <LoginForm/>
          <SignUpButtonContainer>
              <Button
                  onClick={() => goToSignUp(navigate)}
                  type={"submit"}
                  fullWidth
                  variant={"text"}
                  color={"primary"}
              >
                  Não possui conta? Cadastre-se
                  </Button>
          </SignUpButtonContainer>
      </ScreenContainer>
  )
}

export default LoginAreaPage;
