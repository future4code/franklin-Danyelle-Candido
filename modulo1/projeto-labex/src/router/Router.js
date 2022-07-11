import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {PagInicial} from '../components/PublicPages/PagInicial';
import {PagListaDeViagem} from '../components/PublicPages/PagListaDeViagem';
import {PagFormularioDeInscricao}  from '../components/PublicPages/PagFormularioDeInscricao';
import {PagLogin} from '../components/PublicPages/PagLogin';
import {PagAdmViagem} from '../components/PrivatePages/PagAdmViagem';
import {PagCriarViagem} from '../components/PrivatePages/PagCriarViagem';
import {PagDetalhesDaViagem} from '../components/PrivatePages/PagDetalheDaViagem';
import {PagErro} from '../components/PublicPages/PagErro';


const Router = () => {

    return (
      <BrowserRouter>
          <Routes>
              <Route index element={<PagInicial/>}/>
              <Route path='/publico/viagens/lista' element={<PagListaDeViagem/>}/>
              <Route path='/publico/viagens/formulario' element={<PagFormularioDeInscricao/>}/>
              <Route path='/login' element={<PagLogin/>}/>
              <Route path='/admin/viagens' element={<PagAdmViagem/>}/>
              <Route path='/admin/viagens/criar' element={<PagCriarViagem/>}/>
              <Route path='/admin/viagens/:id' element={<PagDetalhesDaViagem/>}/>
              <Route path='*' element={<PagErro/>}/>
          </Routes>
      </BrowserRouter>
    );
  }

export default Router;
