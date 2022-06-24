import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from "../Router/coordinator"

function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="LoginPage">
      <h1>Página de Login</h1>
      <button onClick={()=>goBack(navigate)}>voltar</button>
    </div>
  );
}

export default LoginPage;