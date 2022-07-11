import React from "react";
import FormCandidato from "../Componentes/FormCandidato";
import { FormularioInscricaoContainer } from "./Estilizacao";

export const PagFormularioDeInscricao = () => {

  return (
    <FormularioInscricaoContainer>
      <h1>Formulário de Inscrição</h1>

          Escolher Viagem:
          Nome:
          Idade:
          descrição:
          profissão:
          país:
          <FormCandidato/>
    </FormularioInscricaoContainer>
  );
}