import React from 'react';
import { shallow } from 'enzyme';
import serviceWorker from './serviceWorker';

describe('ServiceWorker', () => {
  test('definition', () => {
    const mockProps = {};
    const wrapper = shallow(<serviceWorker {...mockProps} />);
    expect(wrapper).toBeDefined();
  });
});
