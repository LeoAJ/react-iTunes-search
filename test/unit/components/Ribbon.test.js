import React from 'react';
import { shallow } from 'enzyme';
import Ribbon from '../../../src/components/Ribbon';

describe('<Ribbon />', () => {
  test('Ribbon component should renders correctly', () => {
    const component = shallow(<Ribbon />);
    expect(component).toMatchSnapshot();
  });
});
