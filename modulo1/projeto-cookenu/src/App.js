import React from "react";
import Footer from "./pages/static/Footer";
import Header from "./pages/static/Header";
import Router from "./Router/Router";


function App() {
  return (
    <div className="App">
      <Header/>
        <Router/>
      <Footer/>
    </div>
  );
}

export default App;
