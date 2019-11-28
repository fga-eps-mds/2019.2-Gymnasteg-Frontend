import React, { useEffect } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import PageContent from '../../../../Components/Layout/PageContent';
import CardModalidade from './CardModalidade';
import tableSchema from './tableSchema';

export default function Home({
  modalidades,
  bancasCadastradas,
  getModalities,
  getStands,
}) {
  useEffect(() => {
    getModalities();
    getStands();
    // eslint-disable-next-line
  }, []);

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
        getStands={getStands}
      />
    </PageContent>
  );
}

Home.propTypes = {
  modalidades: PropTypes.arrayOf(PropTypes.object).isRequired,
  bancasCadastradas: PropTypes.arrayOf(PropTypes.object).isRequired,
  getModalities: PropTypes.func.isRequired,
  getStands: PropTypes.func.isRequired,
};
