import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from './Views/Dashboard/Page';
import CadastroBancas from './Views/Dashboard/Admin/CadastroBancas';
import Login from './Views/Login';

function Pages() {
  return (
    <Page>
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
