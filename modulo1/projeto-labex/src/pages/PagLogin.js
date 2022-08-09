import React from "react";
import { ScreenContainer } from "./styled";
import { FormLogin } from "../components/FormLogin";
import { useNavigate } from "react-router-dom";
import { voltar, irParaAdmViagem} from "../router/coordinator";

function PagLogin() {

  const formlogin = FormLogin()
  const navigate = useNavigate()

    return (
      <ScreenContainer>
        PagLogin
        {formlogin}
        <button onClick={()=>{voltar(navigate)}}>voltar</button>
        <button onClick={()=>{irParaAdmViagem(navigate)}}>Adm Viagem</button>
      </ScreenContainer>
    )
  }

export default PagLogin;