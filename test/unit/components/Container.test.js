import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../../src/components/Container';

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
});
