import React from 'react';
import RankingModal from './RankingModal';

const column = [
  {
    title: 'Número da banca',
    dataIndex: 'num_stand',
    key: 'num_stand',
  },
  {
    title: 'Modalidade',
    dataIndex: 'modality',
    key: 'modality',
  },
  {
    title: 'Sexo',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Quantidade de árbitros',
    dataIndex: 'qtd_judges',
    key: 'qtd_judges',
  },
  {
    title: 'Quantidade de atletas',
    dataIndex: 'qtd_athletes',
    key: 'qtd_athletes',
  },
  {
    title: 'Ação',
    dataIndex: 'action',
    render: (rowInfo, itemInfo) => (
      <div>
        <RankingModal stand={itemInfo} />
      </div>
    ),
  },
];

export default column;
