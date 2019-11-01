import React, { useEffect } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import tableSchema from './tableSchema';
import PageContent from '../../../../Components/Layout/PageContent';

export default function Ranking({ bancasCadastradas, getStands }) {
  useEffect(() => {
    getStands();
  }, []);
  return (
    <PageContent title="Ranking">
      <div>
        <h1>Bancas</h1>
      </div>
      <Table
        columns={tableSchema}
        dataSource={bancasCadastradas}
        pagination={false}
      />
    </PageContent>
  );
}

Ranking.propTypes = {
  bancasCadastradas: PropTypes.arrayOf(PropTypes.object).isRequired,
  getStands: PropTypes.func.isRequired,
};
