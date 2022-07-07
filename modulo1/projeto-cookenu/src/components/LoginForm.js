import React, { useState } from "react";
import Button from '@mui/material/Button';
import { InputsContainer, LoginFormContainer } from "../pages/LoginPage/styled";
import { TextField } from "@mui/material";
import useForm from "../hooks/useForms";
import { login } from "../services/user"
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";


function LoginForm({ setRightButtonText }) {
  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, navigate, setRightButtonText, setIsLoading)
  }


  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"} />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"} />
        </InputsContainer>

        <Button
          type={"submit"}
          fullWidth
          variant='contained'
          color="primary"
          margin={"normal"}
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Entrar</>}
        </Button>
      </form>
    </LoginFormContainer>
  );
}

export default LoginForm;