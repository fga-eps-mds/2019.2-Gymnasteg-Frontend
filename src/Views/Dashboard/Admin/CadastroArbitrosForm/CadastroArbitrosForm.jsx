import React from 'react';
import PropTypes from 'prop-types';

import { Button, notification } from 'antd';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './CadastroArbitrosForm.css';

import FieldWithIcon from '../../../../Components/DataEntry/FieldWithIcon';
import PageContent from '../../../../Components/Layout/PageContent';
import { emailValidation } from '../../../../Services/validation-regexes';

import api from '../../../../Services/api';

async function registerJudge(event, values, setFieldValue) {
  event.preventDefault();

  const { name, email } = values;

  try {
    const response = await api.post('/createJudge', { name, email });
    const { password } = response.data;
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
    setFieldValue('name', '');
    setFieldValue('email', '');
  } catch (err) {
    notification.error({ message: err.message });
  }
}

export default function CadastroArbitrosForm(props) {
  const { values, setFieldValue, isSubmitting, setSubmitting } = props;

  return (
    <PageContent title="Cadastro dos Árbitros">
      <form
        className="formulario-cadastro-arbitros"
        onSubmit={async (e) => {
          setSubmitting(true);
          await registerJudge(e, values, setFieldValue);
          setSubmitting(false);
        }}
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

        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
          Cadastrar
        </Button>
      </form>
    </PageContent>
  );
}

CadastroArbitrosForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};
