import React from "react";
import { ScreenContainer } from "./styled";
import { FormCandidato } from "../components/FormCandidato";
import { voltar } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

function FormDeCandidatura() {
  const form= FormCandidato()
  const navigate= useNavigate()

    return (
      <ScreenContainer>
            FormDeCandidatura
            {form}
            <button onClick={voltar(navigate)}>voltar</button>
      </ScreenContainer>
    )
  }

export default FormDeCandidatura;