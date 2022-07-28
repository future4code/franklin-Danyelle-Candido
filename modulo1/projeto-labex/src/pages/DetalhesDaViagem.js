import React from "react";
import { ScreenContainer } from "./styled";
import { DetalhesViagem } from "../components/DetalhesViagem";
import { useNavigate } from "react-router-dom";
import { voltar } from "../router/coordinator";

function DetalhesDaViagem() {

  const detalhes = DetalhesViagem()
  const navigate = useNavigate()

    return (
      <ScreenContainer>
            DetalhesViagem
            {detalhes}
            <button onClick={voltar(navigate)}>voltar</button>
      </ScreenContainer>
    )
  }

export default DetalhesDaViagem;