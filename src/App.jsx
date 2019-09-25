import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Page from './Views/Dashboard/Page';
import CadastroBancas from './Views/Dashboard/Admin/CadastroBancas';
import Login from './Views/Login';
import CadastroAtletaForm from './Views/Dashboard/Admin/CadastroAtletaForm';

import './App.css';

function Pages() {
  return (
    <Page>
      <Route path="/cadastro/atletas/form" component={CadastroAtletaForm} />
      <Route path="/cadastro/bancas" component={CadastroBancas} />
    </Page>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Route path="/cadastro" component={Pages} />
      <Route path="/" exact component={Login} />
    </BrowserRouter>
  );
}

export default App;
