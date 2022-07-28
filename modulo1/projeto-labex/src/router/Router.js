import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdmViagem from "../pages/AdmViagem";
import CriarViagem from "../pages/CriarViagem";
import DetalhesDaViagem from "../pages/DetalhesDaViagem";
import FormDeCandidatura from "../pages/FormDeCandidatura";
import ListaDeViagem from "../pages/ListaDeViagem";
import PagErro from "../pages/PagErro";
import PagInicial from "../pages/PagInicial";
import PagLogin from "../pages/PagLogin";


function Router() {
    return (
        <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<PagInicial/>}/>
              <Route exact path='/login'  element={<PagLogin/>}/>
              <Route exact path='/AdmViagem'  element={<AdmViagem/>}/>
              <Route exact path='/AdmViagem/CriarViagem'  element={<CriarViagem/>}/>
              <Route exact path='/AdmViagem/DetalhesDaViagem'  element={<DetalhesDaViagem/>}/>
              <Route exact path='/ListaDeViagem/FormDeCandidatura'  element={<FormDeCandidatura/>}/>
              <Route exact path='/ListaDeViagem'  element={<ListaDeViagem/>}/>
              <Route path='*' element={<PagErro/>}/>
          </Routes>
        </BrowserRouter>
    );
  }
  export default Router;