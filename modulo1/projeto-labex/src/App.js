import React from "react";
import Router from "./router/router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
        <Router/>
      <Footer/>
    </div>
  );
}

export default App;
