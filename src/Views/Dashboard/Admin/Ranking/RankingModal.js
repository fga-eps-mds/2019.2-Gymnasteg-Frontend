/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { Modal, Button } from 'antd';

export default class RankingModal extends Component {
  state = { visible: false };

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
    return (
      <div>
        <Button type="link" onClick={this.showModal}>
          Ver ranking
        </Button>
        <Modal
          title="Ranking"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
