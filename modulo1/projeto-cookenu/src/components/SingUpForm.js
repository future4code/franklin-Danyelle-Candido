import React, {useState} from "react";
import Button from '@mui/material/Button';
import {InputsContainer, SignUpFormContainer} from "../pages/SingUpPage/styled";
import { TextField } from "@mui/material";
import useForm from "../hooks/useForms";
import { singUp } from "../services/user";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

function SingUpForm({setRightButtonText}) {

  const navigate = useNavigate()

  const [form,onChange,clear] = useForm({name:"",email:"",password:""})

  const [isLoading, setIsLoading] = useState(false)


  const onSubmitForm = (event) =>{
    event.preventDefault()
    singUp(form,clear,navigate,setRightButtonText, setIsLoading)
  }

  return (
    <form onSubmit = {onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField 
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"} 
            fullWidth
            margin={"normal"}
            required
            autoFocus/>
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
        </InputsContainer>

        <Button
            color={'primary'}
            variant={'contained'}
            type={'submit'}
            fullWidth
          >
            {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Cadastrar-se</>}
        </Button>
        </SignUpFormContainer>
      </form>     
      
  );
}

export default SingUpForm;