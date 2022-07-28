import React from "react";
import { useNavigate } from "react-router-dom";
import { ScreenContainer } from "./styled";

function PagErro() {

  const navigate= useNavigate()

    return (
      <ScreenContainer>
            PagErro
            <button onClick={voltar(navigate)}>voltar</button>
      </ScreenContainer>
    )
  }

export default PagErro;