import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from "../Router/coordinator"

function SingUpPage() {
  const navigate = useNavigate()

  return (
    <div className="SingUpPage">
      <h1>Página de Cadastro</h1>
      <button onClick={()=>goBack(navigate)}>voltar</button>
    </div>
  );
}

export default SingUpPage;