import React from 'react';
import { shallow } from 'enzyme';
import Message from '../../../src/components/Message';

describe('<Message />', () => {
  test('Message component should renders correctly', () => {
    const props = {
      status: 'loading'
    };
    const component = shallow(<Message {...props} />);
    expect(component).toMatchSnapshot();
  });
});
