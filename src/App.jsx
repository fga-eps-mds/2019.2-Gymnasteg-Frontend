import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page from './Views/Dashboard/Page';
import Home from './Views/Dashboard/Admin/Home';
import CadastroBancas from './Views/Dashboard/Admin/CadastroBancas';
import CadastroArbitros from './Views/Dashboard/Admin/CadastroArbitros';
import Login from './Views/Login';

import './App.css';

function Pages() {
  return (
    <Page>
      <Switch>
        <Route path="/cadastro/home" component={Home} />
        <Route path="/cadastro/bancas" component={CadastroBancas} />
        <Route path="/cadastro/arbitros" component={CadastroArbitros} />
      </Switch>
    </Page>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Route path="/cadastro" component={Pages} />
      <Route path="/login" exact component={Login} />
    </BrowserRouter>
  );
}

export default App;
