import React from "react";
import { Typography } from "@mui/material";
import {ErrorImage, ErrorPageContainer} from './styled'


function ErrorPage() {
    return (
      <ErrorPageContainer>
{/*           <ErrorImage src={#} /> */}
          <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
      </ErrorPageContainer>
  )
}

export default ErrorPage;
