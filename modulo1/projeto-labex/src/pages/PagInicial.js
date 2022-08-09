import React from "react";
import { ScreenContainer } from "./styled";
import { irParaListaDeViagem } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

function PagInicial() {

  const navigate =useNavigate()

    return (
      <ScreenContainer>
            PagInicial
            <button onClick={irParaListaDeViagem(navigate)}>lista de Viagem</button>
      </ScreenContainer>
    )
  }

export default PagInicial;