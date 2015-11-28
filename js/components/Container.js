import React, { Component } from 'react';
import List from './List';
import Message from './Message';
import emitter from '../emitter';
import reqwest from 'reqwest';
import { getMedia } from '../utils';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = { type: 'start' };
  }

  componentDidMount () {
    emitter.on('search', (state) => {

      this.setState({ type: 'loading' });

      reqwest({
        url: 'https://itunes.apple.com/search?media=' + getMedia(state.media || 'all') + '&term=' + state.query.split(' ').join('+'),
        type: 'jsonp'
      })
      .then(response => this.setState({ response, type: response.resultCount || 'noContent' }))
      .fail(err => this.setState({ type: 'error' }));
    });

  }

  componentWillUnmount () {
    emitter.removeListener('search');
  }

  mainRender() {

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
    } else {
      return (<List {...response} />);
    }

  }

  render () {

    return (
      <div style={{
        margin: '50px auto',
        maxWidth: '900px'
        }}>
      {this.mainRender()}
      </div>
    );
  }

}

export default Container;
