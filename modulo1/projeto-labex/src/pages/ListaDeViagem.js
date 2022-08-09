import React from "react";
import { ScreenContainer } from "./styled";
import { ListaViagem } from "../components/ListaViagem";
import { voltar, irParaFormCandidatura } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

function ListaDeViagem() {
  const list = ListaViagem()
  const navigate = useNavigate()

    return (
      <ScreenContainer>
        Lista De Viagem Página
        {list}
        <button onClick={irParaFormCandidatura(navigate)}>formulário de inscrição</button>
        <button onClick={voltar(navigate)}>voltar</button>
      </ScreenContainer>
    )
  }

export default ListaDeViagem;