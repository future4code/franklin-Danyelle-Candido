import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack} from "../Router/coordinator"
import Button from '@mui/material/Button';

function AddRecipe() {
    const navigate = useNavigate()

  return (
    <div className="AddRecipe">
      <h1>Adicionar Receita</h1>
      <Button variant='contained' color="primary" onClick={()=>goBack(navigate)}>voltar</Button>
    </div>
  );
}

export default AddRecipe;