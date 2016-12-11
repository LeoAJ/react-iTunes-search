// @flow
import React, { Component } from 'react';
// $FlowFixMe
import reqwest from 'reqwest';
import List from './List';
import Message from './Message';
import emitter from '../emitter';
import { getMedia } from '../utils';

type ContainerState = {
  type: 'start' | 'loading' | 'noContent' | 'error',
  response?: Object
};

class Container extends Component {

  state: ContainerState = { type: 'start' };

  componentDidMount() {
    emitter.on('search', ({ media, query }) => {
      this.setState({ type: 'loading' });
      reqwest({
        url: `https://itunes.apple.com/search?media=${getMedia(media || 'all')}&term=${query.split(' ').join('+')}`,
        type: 'jsonp'
      })
      .then(response => this.setState({ response, type: response.resultCount || 'noContent' }))
      .fail(err => this.setState({ type: 'error' }));
    });
  }

  componentWillUnmount() { // eslint-disable-line class-methods-use-this
    emitter.removeListener('search');
  }

  mainRender = () => {
    const { type, response } = this.state;
    const msgMap = {
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

    const msg = msgMap[type];

    if (msg) {
      return (<Message {...msg} />);
    }
    return (<List {...response} />);
  };

  render() {
    return (
      <div
        style={{
          margin: '50px auto',
          maxWidth: '900px'
        }}
      >
        {this.mainRender()}
      </div>
    );
  }

}

export default Container;
