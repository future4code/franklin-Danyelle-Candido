import React from "react";
import { PagInicialContainer } from "./Estilizacao";
import { useNavigate } from "react-router-dom";
import { voltar } from "../../router/coordinator";
import Button from '@mui/material/Button';

export const PagInicial = () => {
  const navegarPara = useNavigate()


  return (
    <PagInicialContainer >
      Inicio
      <Button 
      type={"submit"}
      fullWidth
      variant='contained'
      color="primary" 
      margin={"normal"}
      onClick= {()=>voltar(navegarPara)}>Voltar</Button>
    </PagInicialContainer>
  );
}