import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Page from './Views/Dashboard/Page';
import Home from './Views/Dashboard/Admin/Home';
import CadastroBancas from './Views/Dashboard/Admin/CadastroBancas';
import Login from './Views/Login';

import './App.css';

function AdminPages() {
  return (
    <Page>
      <Switch>
        <Route path="/cadastro/home" component={Home} />
        <Route path="/cadastro/bancas" component={CadastroBancas} />
        <Redirect to="/cadastro/home" />
      </Switch>
    </Page>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" component={AdminPages} />
    </BrowserRouter>
  );
}

export default App;
