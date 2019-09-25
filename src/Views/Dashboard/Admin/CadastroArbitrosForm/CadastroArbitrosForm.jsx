import React from 'react';
import PropTypes from 'prop-types';

import { Button, notification } from 'antd';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './CadastroArbitrosForm.css';

import FieldWithIcon from '../../../../Components/DataEntry/FieldWithIcon';
import { emailValidation } from '../../../../Services/validation-regexes';

function registerJudge(event, values) {
  event.preventDefault();

  const { name, email } = values;

  try {
    const password = 'goqafarizede';
    notification.success({
      message: (
        <>
          Árbitro <b>{name}</b> cadastrado com sucesso.
        </>
      ),
      description: (
        <>
          Email: <b>{email}</b>
          <br />
          Senha: <b>{password}</b>
        </>
      ),
      key: email,
      duration: 10,
    });
  } catch (err) {
    notification.error({ message: err.message });
  }
}

export default function CadastroArbitrosForm(props) {
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
            pattern={emailValidation}
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

CadastroArbitrosForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
