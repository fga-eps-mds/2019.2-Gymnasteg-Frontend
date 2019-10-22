import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Page from './Views/Dashboard/Page';
import Home from './Views/Dashboard/Admin/Home';
import CadastroBancas from './Views/Dashboard/Admin/CadastroBancas';
import CadastroArbitros from './Views/Dashboard/Admin/CadastroArbitros';
import CadastroArbitrosForm from './Views/Dashboard/Admin/CadastroArbitrosForm';
import Login from './Views/Login';
import CadastroAtletaForm from './Views/Dashboard/Admin/CadastroAtletaForm';
import CadastroAtletas from './Views/Dashboard/Admin/CadastroAtletas';

import './App.css';
import EditarCoordenador from './Views/Dashboard/Admin/EditarCoordenador';

function AdminPages(props) {
  const { history } = props;

  return (
    <Page history={history}>
      <Switch>
        <Route path="/cadastro/home" component={Home} />
        <Route path="/cadastro/bancas" component={CadastroBancas} />
        <Route
          path="/cadastro/arbitros/form"
          component={CadastroArbitrosForm}
        />
        <Route path="/cadastro/arbitros" component={CadastroArbitros} />
        <Route path="/cadastro/atletas/form" component={CadastroAtletaForm} />
        <Route path="/cadastro/atletas" component={CadastroAtletas} />
        <Route path="/cadastro/editar-perfil" component={EditarCoordenador} />
        <Redirect to="/cadastro/home" />
      </Switch>
    </Page>
  );
}
AdminPages.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" component={AdminPages} />
    </BrowserRouter>
  );
}

export default App;
