import React from "react";
import { ScreenContainer } from "./styled";
import { DetalhesViagem } from "../components/DetalhesViagem";

function AdmViagem() {
  const detalhes= DetalhesViagem()
  
    return (
      <ScreenContainer>
            AdmViagem
            -Lista de Viagem adm
            {detalhes}
            --adicionar viagem a lista
            
      </ScreenContainer>
    )
  }

export default AdmViagem;