import React from 'react';
import { shallow } from 'enzyme';
import List from '../../../src/components/List';

describe('<List />', () => {
  test('List component should renders correctly', () => {
    const props = {
      results: 2,
      resultCount: [
        {
          trackId: '1',
          trackPrice: 0.99,
          artworkUrl100: '',
          trackName: '',
          description: ''
        },
        {
          trackId: '2',
          trackPrice: 1.99,
          artworkUrl100: '',
          trackName: '',
          description: ''
        }
      ]
    };
    const component = shallow(<List {...props} />);
    expect(component).toMatchSnapshot();
  });
});
