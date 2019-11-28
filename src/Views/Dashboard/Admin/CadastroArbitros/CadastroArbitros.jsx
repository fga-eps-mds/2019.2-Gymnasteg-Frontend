import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Collapse, Button, Radio, message, Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import PageContent from '../../../../Components/Layout/PageContent';
import Card from '../../../../Components/Card/index';
import './CadastroArbitros.css';

import api from '../../../../Services/api';

const { Panel } = Collapse;

export default function CadastroArbitros({
  judges,
  fetchJudges,
}) {
  useEffect(() => {
    fetchJudges();
    // eslint-disable-next-line
  }, []);

  async function submitDelete(idJudge) {
    try {
      await api.delete(`/judges/${idJudge}`);
      message.success('Árbitro excluido!', 0.5);
      fetchJudges();
    } catch (error) {
      message.error('Falha na exclusão do árbitro!');
    }
  }

  return (
    <PageContent title="Cadastro dos Árbitros">
      <Card title="Cadastrar manualmente" icon="edit" route="arbitros/form" />
      <Collapse>
        {judges.map((judge) => (
          <Panel header={judge.name}>
            <b>Email: </b>
            {judge.email}
            <br />
            <b>Senha: </b>
            {judge.password}
            <br />
            <div className="tipo-arbitro">
              <Radio.Group
                disabled
                defaultValue={judge.judge_type}
                size="small"
              >
                <Radio.Button value="Execution and Difficulty">
                  Execução e Dificuldade
                </Radio.Button>
                <Radio.Button value="Execution">Execução</Radio.Button>
                <Radio.Button value="Difficulty">Dificuldade</Radio.Button>
              </Radio.Group>
            </div>
            <div className="button-edit">
              <Link to={`/cadastro/arbitros/form/${judge.id}`}>
                <Button className="btn1" type="primary" size="small">
                  <Icon type="form" />
                Editar
                </Button>
              </Link>
              <Popconfirm
                onConfirm={() => submitDelete(judge.id)}
                title="Deseja confirmar a exclusão do árbitro?"
                okText="Sim"
                cancelText="Não"
              >
                <Button
                  className="btn2"
                  type="danger"
                  size="small"
                >
                  <Icon type="delete" theme="filled" />
                Excluir árbitro
                </Button>
              </Popconfirm>
            </div>
          </Panel>
        ))}
      </Collapse>
    </PageContent>
  );
}

CadastroArbitros.propTypes = {
  judges: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchJudges: PropTypes.func.isRequired,
};
