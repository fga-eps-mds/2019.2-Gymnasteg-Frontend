import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Page from './Views/Dashboard/Page';
import Home from './Views/Dashboard/Admin/Home';
import CadastroBancas from './Views/Dashboard/Admin/CadastroBancas';
import CadastroArbitros from './Views/Dashboard/Admin/CadastroArbitros';
import CadastroArbitrosForm from './Views/Dashboard/Admin/CadastroArbitrosForm';
import Login from './Views/Login';
import CadastroAtletaForm from './Views/Dashboard/Admin/CadastroAtletaForm';
import CadastroAtletas from './Views/Dashboard/Admin/CadastroAtletas';
import Ranking from './Views/Dashboard/Admin/Ranking';

import './App.css';

function AdminPages() {
  return (
    <Page>
      <Switch>
        <Route path="/cadastro/home" component={Home} />
        <Route path="/cadastro/bancas" component={CadastroBancas} />
        <Route
          path="/cadastro/editar-banca/:idBanca"
          component={CadastroBancas}
        />
        <Route
          path="/cadastro/arbitros/form"
          component={CadastroArbitrosForm}
        />
        <Route path="/cadastro/arbitros" component={CadastroArbitros} />
        <Route path="/cadastro/atletas/form" component={CadastroAtletaForm} />
        <Route path="/cadastro/atletas" component={CadastroAtletas} />
        <Route path="/ranking" component={Ranking} />
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
      <Route path="/ranking" component={AdminPages} />
    </BrowserRouter>
  );
}

export default App;
