import styled from 'styled-components';

export const VerticalList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const VotingJudgeListItem = styled.li`
  & > *:first-child {
    margin-right: 7px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
`;
