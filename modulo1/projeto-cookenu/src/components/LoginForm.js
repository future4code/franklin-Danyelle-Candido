import React from "react";
import Button from '@mui/material/Button';
import {InputsContainer} from "../pages/LoginPage/styled";
import { TextField } from "@mui/material";
import useForm from "../hooks/useForms";
import {login} from "../services/user"
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [form,onChange,clear] = useForm({email:"",password:""})

  const navigate = useNavigate();

  const onSubmitForm = (event) =>{
    event.preventDefault()
    login(form,clear,navigate)
  }


  return (
      <InputsContainer>
        <form onSubmit = {onSubmitForm}>
        <TextField 
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"} 
          fullWidth
          margin={"normal"}
          required
          type={"email"}/>
        <TextField 
          name={"password"}
          value={form.password}
          onChange={onChange} 
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}/>

          <Button 
            type={"submit"}
            fullWidth
            variant='contained' 
            color="primary" 
            margin={"normal"}
            >
            Entrar
          </Button>
        </form>
      
      </InputsContainer>
  );
}

export default LoginForm;