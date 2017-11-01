import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../../src/components/Container';

const mockData = {
  resultCount: 1,
  results: [
    {
      trackId: '1',
      trackPrice: 0.99,
      artworkUrl100: '',
      trackName: '',
      description: ''
    }
  ]
};

const mockResponse = {
  ok: true,
  json: _ => mockData
};

global.fetch = jest.fn().mockImplementation(_ => new Promise((resolve, reject) => resolve(mockResponse)));

describe('<Container />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Container />);
  });
  test('init state', () => {
    expect(component).toMatchSnapshot();
  });
  test('loading state', () => {
    component.setState({ status: 'loading' });
    expect(component).toMatchSnapshot();
  });
  test('show data', () => {
    const data = {
      resultCount: 2,
      results: [
        {
          trackName: 'test1'
        },
        {
          trackName: 'test2'
        }
      ]
    };
    component.setState({
      status: '',
      data
    });
    expect(component).toMatchSnapshot();
  });
  test('no search results state', () => {
    component.setState({ status: 'noContent' });
    expect(component).toMatchSnapshot();
  });
  test('error state', () => {
    component.setState({ status: 'error' });
    expect(component).toMatchSnapshot();
  });

  test('getSearchResult should fetch data', async () => {
    const state = {
      media: 'music',
      query: 'bsb'
    };
    const instance = component.instance();
    await instance.getSearchResult(state);
    expect(component.state()).toMatchSnapshot();
  });

  test('should set error state if there is a fetch error', async () => {
    const instance = component.instance();
    await instance.getSearchResult();
    expect(component.state()).toMatchSnapshot();
  });
});
