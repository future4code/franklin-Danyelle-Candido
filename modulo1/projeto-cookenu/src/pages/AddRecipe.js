import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from "../Router/coordinator"

function AddRecipe() {
    const navigate = useNavigate()

  return (
    <div className="AddRecipe">
      <h1>Adicionar Receita</h1>
      <button onClick={()=>goBack(navigate)}>voltar</button>
    </div>
  );
}

export default AddRecipe;