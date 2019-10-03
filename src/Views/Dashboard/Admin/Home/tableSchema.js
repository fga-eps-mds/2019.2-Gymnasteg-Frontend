import React from 'react';
import { Button } from 'antd';

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
    render: (text) => (
      <Button type="link">Editar</Button>
    ),
  },
];
