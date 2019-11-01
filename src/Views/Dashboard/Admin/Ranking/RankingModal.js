/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';

import './styles.css';
import api from '../../../../Services/api';

export default class RankingModal extends Component {
  state = { visible: false };

  async componentDidMount() {
    const { id_stand } = this.props.stand;
    const { data } = await api.get(`/ranking/stand/${id_stand}`);
    const ranking = {};
    (data || []).forEach((item) => {
      if (!(item.fk_athlete_id in ranking)) {
        ranking[item.fk_athlete_id] = [];
      }
      ranking[item.fk_athlete_id].push(item);
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { stand } = this.props;
    return (
      <div>
        <Button type="link" onClick={this.showModal}>
          Ranking
        </Button>
        <Modal
          className="modal-title"
          title={`Banca ${stand.num_stand} - Ginástica ${stand.modality}`}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          {(stand.athletes || []).map((athlete) => (
            <>
              <div className="container">
                <h1 className="name-athlete">{athlete.name}</h1>
                <div className="athlete-grade">
                  <div className="div-table-grade">
                    <table>
                      <tr>
                        <td />
                        <th className="table-grade-header">Execução</th>
                        <th className="table-grade-header">Dificuldade</th>
                      </tr>
                      <tr>
                        <td className="table-grade judge">Teste 2</td>
                        <td className="table-grade">Teste 1</td>
                        <td className="table-grade">Teste 2</td>
                      </tr>
                      <tr>
                        <td className="table-grade judge">Teste 2</td>
                        <td className="table-grade">Teste 1</td>
                        <td className="table-grade">Teste 2</td>
                      </tr>
                      <tr>
                        <td className="table-grade judge">Teste 2</td>
                        <td className="table-grade">Teste 1</td>
                        <td className="table-grade">Teste 2</td>
                      </tr>
                      <tr>
                        <td className="table-grade judge">Teste 2</td>
                        <td className="table-grade">Teste 1</td>
                        <td className="table-grade">Teste 2</td>
                      </tr>
                    </table>
                  </div>
                  <div className="final-grade">
                    <div>
                      <span className="final-grade-number">50</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="row" />
            </>
          ))}
        </Modal>
      </div>
    );
  }
}

RankingModal.propTypes = {
  stand: PropTypes.shape({
    num_stand: PropTypes.number.isRequired,
    athletes: PropTypes.array.isRequired,
    modality: PropTypes.number.isRequired,
  }).isRequired,
};
