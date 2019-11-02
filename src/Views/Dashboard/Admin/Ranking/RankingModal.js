/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';

import './styles.css';
import api from '../../../../Services/api';

export default class RankingModal extends Component {
  state = {
    visible: false,
  };

  async componentDidMount() {
    const { stand } = this.props;
    const { data } = await api.get(`/ranking/stand/${stand.id_stand}`);
    const ranking = {};
    const punctuationFinal = [];

    (data || []).forEach((item) => {
      if (!(item.fk_athlete_id in ranking)) {
        ranking[item.fk_athlete_id] = [];
      }
      if (!(item.fk_athlete_id in punctuationFinal)) {
        punctuationFinal[item.fk_athlete_id] = 0;
      }
      ranking[item.fk_athlete_id].push(item);
      punctuationFinal[item.fk_athlete_id] += item.punctuation;
    });

    this.setState({ rankingFilterByIdAthlete: ranking, punctuationFinal });
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
    const { rankingFilterByIdAthlete, punctuationFinal, visible } = this.state;
    const { stand } = this.props;


    return (
      <div>
        <Button type="link" onClick={this.showModal}>
          Ranking
        </Button>
        <Modal
          className="modal-title"
          title={`Banca ${stand.num_stand} - Ginástica ${stand.modality}`}
          visible={visible}
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
                      {(rankingFilterByIdAthlete[athlete.id] || [])
                        .map((ranking) => (
                          <tr>
                            <td className="table-grade judge">
                              {ranking.judge.name}
                            </td>
                            <td className="table-grade">
                              {
                                ranking.type_punctuation === 'Execution'
                                  ? ranking.punctuation : '-'
                              }
                            </td>
                            <td className="table-grade">
                              {ranking.type_punctuation === 'Difficulty'
                                ? ranking.punctuation : '-'}
                            </td>
                          </tr>
                        ))}
                    </table>
                  </div>
                  <div className="final-grade">
                    <div>
                      <span className="final-grade-number">
                        {(punctuationFinal[athlete.id] / stand.qtd_judges)
                          .toFixed(2)}
                      </span>
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
    id_stand: PropTypes.number.isRequired,
    num_stand: PropTypes.number.isRequired,
    athletes: PropTypes.array.isRequired,
    modality: PropTypes.number.isRequired,
    qtd_judges: PropTypes.number.isRequired,
  }).isRequired,
};
