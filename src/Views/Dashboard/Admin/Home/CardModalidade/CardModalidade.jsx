import React from 'react';
import PropTypes from 'prop-types';
import { CardBody, CardsHolder, CardTitleHolder } from './CardModalidade.styles';

export function Card({ title, imgSource }) {
  return (
    <CardBody src={imgSource}>
      <CardTitleHolder>
        <b>{title}</b>
      </CardTitleHolder>
    </CardBody>
  );
}

export default function CardModalidade(props) {
  const { modalidades } = props;

  return (
    <>
      <h2>Selecione uma <strong>modalidade</strong> para
        <strong>cadastrar uma banca</strong>
      </h2>
      <CardsHolder>
        {
          modalidades.map((modalidade) => (
            <Card
              title={modalidade.title}
              imgSource={modalidade.imgSource}
            />
          ))
        }
      </CardsHolder>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired,
};

CardModalidade.propTypes = {
  modalidades: PropTypes.arrayOf(PropTypes.object).isRequired,
};
