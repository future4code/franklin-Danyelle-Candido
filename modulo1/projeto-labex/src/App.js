import React from "react";
import Router from "./router/Router";
import { MenuContainer } from "./Estilizacao";
import { Cabecalho } from "./components/static/Cabecalho";
import { Rodape } from "./components/static/Rodape";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cabecalho/>
      <MenuContainer >
        <Router/>
      </MenuContainer>
      <Rodape/>
    </ThemeProvider>
  );
}

export default App;