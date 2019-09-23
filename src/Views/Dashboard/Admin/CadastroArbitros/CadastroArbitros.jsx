import React from 'react';
import PropTypes from 'prop-types';

import { Button, Input as AntInput } from 'antd';
import './CadastroArbitros.css';

import FieldWithIcon from '../../../../Components/DataEntry/FieldWithIcon';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// prettier-ignore
// eslint-disable-next-line
const emailValidationRegex = "[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?";

export default function CadastroArbitros() {
  return (
    <form className="formulario-cadastro-arbitros">
      <div>
        <div>
          <FieldWithIcon
            pattern={undefined}
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

      <Button htmlType="submit" type="primary">
        Cadastrar
      </Button>
    </form>
  );
}
