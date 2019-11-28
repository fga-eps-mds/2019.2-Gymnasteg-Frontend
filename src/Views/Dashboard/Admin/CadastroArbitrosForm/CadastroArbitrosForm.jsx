import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import loget from 'lodash.get';
import { Radio } from 'antd';
import { Field } from 'formik';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './CadastroArbitrosForm.css';

import FieldWithIcon from '../../../../Components/DataEntry/FieldWithIcon';
import PageContent from '../../../../Components/Layout/PageContent';
import { emailValidation } from '../../../../Services/validation-regexes';
import { GymnastegButton } from '../../Judge/Bancas/Bancas.styles';

export default function CadastroArbitrosForm({
  isSubmitting,
  isValid,
  handleSubmit,
  fetchEditingData,
  match,
}) {
  useEffect(() => {
    fetchEditingData();
  }, [fetchEditingData]);

  const isEditing = !!loget(match, ['params', 'idArbitro'], false);

  return (
    <PageContent title="Cadastro dos Árbitros">
      <form className="formulario-cadastro-arbitros">
        <div>
          <div>
            <FieldWithIcon
              name="name"
              type="text"
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

        <div>
          <div>
            <span>Avalia:</span>
            <br />
            <Field name="JudgeType">
              {({ field }) => (
                <Radio.Group {...field} name="JudgeType" size="large">
                  <Radio.Button value="Execution and Difficulty">
                    Execução e Dificuldade
                  </Radio.Button>
                  <Radio.Button value="Execution">Execução</Radio.Button>
                  <Radio.Button value="Difficulty">Dificuldade</Radio.Button>
                </Radio.Group>
              )}
            </Field>
          </div>
        </div>

        <GymnastegButton
          type="primary"
          htmlType="submit"
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit}
        >
          {isEditing ? 'Editar Árbitro' : 'Cadastrar Árbitro'}
        </GymnastegButton>
      </form>
    </PageContent>
  );
}

CadastroArbitrosForm.propTypes = {
  isValid: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  fetchEditingData: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  match: PropTypes.arrayOf(PropTypes.any).isRequired,
};
