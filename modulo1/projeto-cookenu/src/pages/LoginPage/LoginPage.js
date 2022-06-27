import React from "react";
import Button from '@mui/material/Button';
import {ScreenContainer, LogoImage, SignUpButtonContainer} from "./styled";
import LoginForm from "../../components/LoginForm";
import { goToSingUp } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


function LoginPage() {
  const navigate = useNavigate();
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={'https://imgur.com/6RmVuyi.png'}/>
      <LoginForm/>
      <SignUpButtonContainer >
        <Button 
            type={"submit"}
            fullWidth
            variant='text' 
            color="primary" 
            margin={"normal"}
            onClick={()=>{goToSingUp(navigate)}}
            >
            Não possui conta? Cadastrar-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}

export default LoginPage;