import React from "react";
import { ScreenContainer } from "./styled";
import { FormAddViagem } from "../components/FormAddViagem";
import { voltar } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

function CriarViagem() {

  const form = FormAddViagem()
  const navigate = useNavigate()

    return (
      <ScreenContainer>
            CriarViagem
            {form}
            <button onClick={voltar(navigate)}>voltar</button>
      </ScreenContainer>
    )
  }

export default CriarViagem;