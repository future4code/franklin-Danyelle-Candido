import React from "react";
import FormAddViagem from "../Componentes/FormAddViagem";
import { CriarViagemContainer } from "./Estilizacao";

export const PagCriarViagem = () =>{

  return (
    <CriarViagemContainer >
      <p>Create Trip Container</p>
      <FormAddViagem/>
    </CriarViagemContainer>
  );
}