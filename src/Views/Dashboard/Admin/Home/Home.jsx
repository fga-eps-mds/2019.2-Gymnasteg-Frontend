import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import PageContent from '../../../../Components/Layout/PageContent';
import CardModalidade from './CardModalidade';
import tableSchema from './tableSchema';

export default function Home({ modalidades, bancasCadastradas }) {
  return (
    <PageContent title="Início">
      <CardModalidade modalidades={modalidades} />
      <br />
      <br />
      <h2>Bancas cadastradas</h2>
      <Table
        bordered
        columns={tableSchema}
        dataSource={bancasCadastradas}
        pagination={false}
      />
    </PageContent>
  );
}

Home.propTypes = {
  modalidades: PropTypes.arrayOf(PropTypes.object).isRequired,
  bancasCadastradas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
