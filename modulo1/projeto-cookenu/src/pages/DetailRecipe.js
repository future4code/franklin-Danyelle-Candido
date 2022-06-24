import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from "../Router/coordinator"

function DetailRecipe() {
  const navigate = useNavigate()
  return (
    <div className="DetailRecipe">
      <h1>Detalhes da Receita</h1>
      <button onClick={()=>goBack(navigate)}>voltar</button>
    </div>
  );
}

export default DetailRecipe;