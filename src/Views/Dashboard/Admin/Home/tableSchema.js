import React from 'react';
import { Icon, Button, Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom';
import api from '../../../../Services/api';
import './Home.css';

export async function submitDelete(idStand) {
  try {
    await api.delete(`/stands/${idStand}`);
    message.success('Banca excluída!', 0.5);
    window.location.reload();
  } catch (error) {
    message.error('Falha na exclusão da banca!');
  }
}

export default [
  {
    title: 'Número da banca',
    key: 'numBanca',
    dataIndex: 'numBanca',
  },
  {
    title: 'Modalidade',
    key: 'modalidade',
    dataIndex: 'modalidade',
  },
  {
    title: 'Sexo',
    key: 'sexo',
    dataIndex: 'sexo',
  },
  {
    title: 'Quantidade de árbitros',
    key: 'qtdArbitros',
    dataIndex: 'qtdArbitros',
  },
  {
    title: 'Quantidade de atletas',
    key: 'qtdAtletas',
    dataIndex: 'qtdAtletas',
  },
  {
    title: 'Ação',
    key: 'acao',
    render: (rowInfo, itemInfo) => (
      <div className="button-edit-atletas">
        <Link to={`/cadastro/editar-banca/${itemInfo.acao}`}>
          <Button className="btn1" type="primary" size="small">
            <Icon type="form" />
            Editar
          </Button>
        </Link>
        <Popconfirm
          onConfirm={() => {
            submitDelete(itemInfo.acao);
          }}
          title="Deseja confirmar a exclusão da banca?"
          okText="Sim"
          cancelText="Não"
        >
          <Button className="btn2" type="danger" size="small">
            <Icon type="delete" theme="filled" />
            Excluir banca
          </Button>
        </Popconfirm>
      </div>
    ),
  },
];
