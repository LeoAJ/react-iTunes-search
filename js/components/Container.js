// @flow
import React, { Component } from 'react';
import reqwest from 'reqwest';
import List from './List';
import Message from './Message';
import emitter from '../emitter';
import { getApiUrl } from '../utils';
import type { HeaderState, ContainerState } from '../type';

const REQWEST_TYPE: string = 'jsonp';

const msgMap: Object = {
  start: {
    headerMsg: 'Welcome back!',
    iconColor: 'black',
    icon: 'help',
    bodyMsg: 'Please use enter to start search!'
  },
  loading: {
    headerMsg: 'Just one second',
    iconColor: 'blue',
    icon: 'notched circle loading',
    bodyMsg: 'Fetching data......'
  },
  noContent: {
    headerMsg: 'No search results',
    iconColor: 'yellow',
    icon: 'warning',
    bodyMsg: 'There is no data.'
  },
  error: {
    headerMsg: 'Error',
    iconColor: 'red',
    icon: 'warning sign',
    bodyMsg: 'We\'re sorry please try again later.'
  }
};

class Container extends Component {

  state: ContainerState = { type: 'start' };

  async getSearchResult(headerState: HeaderState) {
    try {
      this.setState({ type: 'loading' });
      const response = await reqwest({
        url: getApiUrl(headerState),
        type: REQWEST_TYPE
      });
      this.setState({
        response,
        type: response.resultCount || 'noContent'
      });
    } catch (e) {
      this.setState({ type: 'error' });
    }
  }

  componentDidMount() {
    emitter.on('search', this.getSearchResult.bind(this));
  }

  componentWillUnmount() { // eslint-disable-line class-methods-use-this
    emitter.removeListener('search');
  }

  render() {
    const { type, response } = this.state;
    const msg = msgMap[type];
    return (
      <div
        style={{
          margin: '50px auto',
          maxWidth: '900px'
        }}
      >
        {msg ? <Message {...msg} /> : <List {...response} />}
      </div>
    );
  }
}

export default Container;
