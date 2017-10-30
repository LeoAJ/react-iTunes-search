import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../src/components/Header';

describe('<Header />', () => {
  let component;
  let instance;
  let mockEvent;
  beforeEach(() => {
    mockEvent = {
      keyCode: 13,
      target: {
        value: 'test'
      }
    };
    component = shallow(<Header />);
    instance = component.instance();
  });
  test('Header component should renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
  test('_onKeyUp should start requestAnimationFrame', () => {
    instance._onKeyUp(mockEvent);
    expect(instance.ticking).toBeTruthy();
    expect(instance.rAf).toBeDefined();
  });
  test('_update should set new state', () => {
    instance._update(mockEvent)();
    expect(component.state().query).toBe('test');
    expect(instance.ticking).toBeFalsy();
  });
});
