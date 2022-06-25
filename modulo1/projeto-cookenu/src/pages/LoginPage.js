import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from "../Router/coordinator"
import Button from '@mui/material/Button';

function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="LoginPage">
      <h1>Página de Login</h1>
      <Button variant='contained' color="primary" onClick={()=>goBack(navigate)}>voltar</Button>
    </div>
  );
}

export default LoginPage;