import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../../src/components/Item';

describe('<Item />', () => {
  test('Item component should renders correctly', () => {
    const props = {
      artworkUrl100: '/100x100/',
      trackName: '',
      trackViewUrl: '',
      longDescription: ''
    };
    const component = shallow(<Item {...props} />);
    expect(component).toMatchSnapshot();
  });
});
