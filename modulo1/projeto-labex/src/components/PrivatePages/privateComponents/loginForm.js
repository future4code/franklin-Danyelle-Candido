import { useNavigate } from "react-router-dom"
import React from "react"
import { TextField } from "@mui/material"
import {Button} from "@mui/material"

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
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
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                </InputsContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >Entrar
                </Button>
            </form>
        </LoginFormContainer>
    )
}

export default LoginForm