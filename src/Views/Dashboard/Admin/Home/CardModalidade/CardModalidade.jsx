import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../../../Services/history';
import { CardBody, CardsHolder, CardTitleHolder } from './CardModalidade.styles';

export function Card({ title, imgSource, onClick }) {
  return (
    <CardBody src={imgSource} onClick={onClick}>
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
          modalidades.map((modalidade, index) => (

            <Card
              onClick={() => {
                history
                  .push('/cadastro/bancas', { idModalidade: modalidade });
              }}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              title={modalidade.title}
              imgSource={modalidade.imgSource}
              modalidade={modalidade.id}
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
  onClick: PropTypes.func.isRequired,
};

CardModalidade.propTypes = {
  modalidades: PropTypes.arrayOf(PropTypes.object).isRequired,
};
