import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated, isRootUser } from './Services/authentication';
import Page from './Views/Dashboard/Page';
import Home from './Views/Dashboard/Admin/Home';
import CadastroBancas from './Views/Dashboard/Admin/CadastroBancas';
import CadastroArbitros from './Views/Dashboard/Admin/CadastroArbitros';
import CadastroArbitrosForm from './Views/Dashboard/Admin/CadastroArbitrosForm';
import Login from './Views/Login';
import CadastroAtletaForm from './Views/Dashboard/Admin/CadastroAtletaForm';
import CadastroAtletas from './Views/Dashboard/Admin/CadastroAtletas';
import Ranking from './Views/Dashboard/Admin/Ranking';

import Bancas from './Views/Dashboard/Judge/Bancas';

import './App.css';
import EditarCoordenador from './Views/Dashboard/Admin/EditarCoordenador';

export function PrivateRoute({ component: Component, ...rest }) {
  const hasAuth = isAuthenticated();

  return (
    <Route
      {...rest}
      render={(props) =>
        (hasAuth ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

function AdminPages(props) {
  const { history } = props;

  return (
    <Page history={history}>
      <Switch>
        <Route path="/cadastro/dashboard" component={Bancas} />
        <PrivateRoute path="/cadastro/home" component={Home} />
        <PrivateRoute
          exact
          path="/cadastro/bancas"
          component={CadastroBancas}
        />
        <PrivateRoute
          path="/cadastro/editar-banca/:idBanca"
          component={CadastroBancas}
        />
        <PrivateRoute
          path="/cadastro/arbitros/form/:idArbitro"
          component={CadastroArbitrosForm}
        />
        <PrivateRoute
          path="/cadastro/arbitros/form"
          component={CadastroArbitrosForm}
        />
        <PrivateRoute path="/cadastro/arbitros" component={CadastroArbitros} />
        <PrivateRoute
          path="/cadastro/atletas/form/:idAtleta"
          component={CadastroAtletaForm}
        />
        <PrivateRoute
          path="/cadastro/atletas/form"
          component={CadastroAtletaForm}
        />
        <PrivateRoute
          path="/cadastro/atletas"
          component={CadastroAtletas}
        />

        <PrivateRoute path="/ranking" component={Ranking} />
        <Route path="/cadastro/editar-perfil" component={EditarCoordenador} />
        <Redirect to="/cadastro/home" />
      </Switch>
    </Page>
  );
}

function JudgeRoutes() {
  return (
    <Page>
      <PrivateRoute
        path="/judge/home"
        component={() => <h1>Home do Juíz</h1>}
      />
      <Redirect to="/judge/home" />
    </Page>
  );
}

function renderRoutes() {
  if (isRootUser) {
    return (
      <>
        <Route path="/" component={AdminPages} />
      </>
    );
  }

  if (isRootUser === false) {
    return <Route path="/judge" component={JudgeRoutes} />;
  }

  return <Redirect to="/" />;
}

function App(props) {
  const { history } = props;

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        {renderRoutes()}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

AdminPages.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
