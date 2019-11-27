import React from 'react';
import { shallow } from 'enzyme';
import RankingModal from './RankingModal';

describe('Tela RankingModal', () => {
  test('Deve estar definida', () => {
    const mockProps = { stand: [] };
    const wrapper = shallow(<RankingModal {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
