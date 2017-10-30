import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/components/App';

describe('<App />', () => {
  test('App component should renders correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
