import React from 'react';
import PropTypes from 'prop-types';

import { Button, notification } from 'antd';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './CadastroArbitros.css';

import FieldWithIcon from '../../../../Components/DataEntry/FieldWithIcon';

// prettier-ignore
// eslint-disable-next-line
const emailValidationRegex = "[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?";

function registerJudge(event, values) {
  event.preventDefault();

  const { name } = values;

  try {
    notification.success({
      message: (
        <>
          Árbitro <b>{name}</b> cadastrado com sucesso.
        </>
      ),
    });
  } catch (err) {
    notification.error({ message: err.message });
  }
}

export default function CadastroArbitros(props) {
  const { values } = props;

  return (
    <form
      className="formulario-cadastro-arbitros"
      onSubmit={(e) => registerJudge(e, values)}
    >
      <div>
        <div>
          <FieldWithIcon
            name="name"
            placeholder="Insira o nome"
            id="InputDoNomeDoArbitro"
            labeltext="Nome do árbitro:"
            icon={faUser}
          />
        </div>
        <div>
          <FieldWithIcon
            name="email"
            type="email"
            placeholder="Insira o e-mail"
            id="InputDoEmailDoArbitro"
            pattern={emailValidationRegex}
            labeltext="E-mail do árbitro:"
            icon={faEnvelope}
          />
        </div>
      </div>

      <Button type="primary" htmlType="submit">
        Cadastrar
      </Button>
    </form>
  );
}

CadastroArbitros.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
