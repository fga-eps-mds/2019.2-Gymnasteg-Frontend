import React from 'react';
import { shallow, mount } from 'enzyme';
import { Formik } from 'formik';
import Home from './Home';

describe('Home page', () => {
  const mockProps = {
    modalidades: [],
    getModalities: jest.fn(),
    getStands: jest.fn(),
  };
  test('Home', () => {
    const wrapper = shallow(<Home {...mockProps} />);
    expect(wrapper).toBeDefined();
  });

  test('functions on useEffect', () => {
    mount(
      <Formik>
        <Home {...mockProps} />
      </Formik>,
    );
  });
});
