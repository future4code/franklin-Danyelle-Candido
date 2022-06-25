import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./constants/theme";
import Footer from "./pages/static/Footer";
import Router from "./Router/Router";


function App() {
  return (
    <ThemeProvider theme={theme}>

      <Router/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
