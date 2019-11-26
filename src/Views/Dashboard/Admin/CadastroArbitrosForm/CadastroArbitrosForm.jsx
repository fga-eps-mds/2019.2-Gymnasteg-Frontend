import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import loget from 'lodash.get';
import { Button, Radio } from 'antd';
import { Field } from 'formik';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './CadastroArbitrosForm.css';

import FieldWithIcon from '../../../../Components/DataEntry/FieldWithIcon';
import PageContent from '../../../../Components/Layout/PageContent';
import { emailValidation } from '../../../../Services/validation-regexes';

// async function registerJudge(event, values, setFieldValue) {
//   event.preventDefault();

//   const { name, email, JudgeType } = values;

//   try {
//     const response = await api.post('/createJudge', {
//       name,
//       email,
//       judge_type: JudgeType,
//     });
//     const { password } = response.data;
//     notification.success({
//       message: (
//         <>
//           Árbitro <b>{name}</b> cadastrado com sucesso.
//         </>
//       ),
//       description: (
//         <>
//           Email: <b>{email}</b>
//           <br />
//           Senha: <b>{password}</b>
//         </>
//       ),
//       key: email,
//       duration: 3,
//     });
//     setFieldValue('name', '');
//     setFieldValue('email', '');
//     setFieldValue('JudgeType', 'Execution and Difficulty');
//   } catch (err) {
//     if (err.response) {
//       notification.error({ message: err.response.data });
//     } else if (navigator.onLine) {
//       notification.error({
//         message: 'Não foi possível conectar-se com o servidor.',
//       });
//     } else {
//       notification.error({ message: 'Sem conexão à internet.' });
//     }
//   }
// }

export default function CadastroArbitrosForm({
  isSubmitting,
  isValid,
  handleSubmit,
  fetchEditingData,
  match,
}) {
  useEffect(() => {
    fetchEditingData();
  }, []);

  // const { values, setFieldValue, isSubmitting, setSubmitting } = props;

  // const reload = () => {
  //   setTimeout(() => {
  //     window.location.replace('/cadastro/arbitros');
  //   }, 4000);
  // };

  const isEditing = !!loget(match, ['params', 'idArbitro'], false);

  return (
    <PageContent title="Cadastro dos Árbitros">
      <form
        className="formulario-cadastro-arbitros"
      >
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

        <Button
          type="primary"
          htmlType="submit"
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit}
        >
          {isEditing ? 'Editar Árbitro' : 'Cadastar Árbitroe'}
        </Button>
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
