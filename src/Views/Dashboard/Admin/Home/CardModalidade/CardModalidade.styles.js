import styled from 'styled-components';
import colors from '../../../../../Constants/colors';

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 120px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 8px;
  background-color: ${colors.white};
  overflow: hidden;
  box-shadow: 0 0 16px lightgray;

  @media (max-width: 425px) {
    height: 150px;
  }
`;

export const CardTitleHolder = styled.div`
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: black;
  opacity: 0.8;
  padding: 14px 10px;
`;

export const CardsHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 12px;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
