import React, { Component } from 'react';
import List from './List';
import Message from './Message';
import emitter from '../emitter';
import reqwest from 'reqwest';
import { getMedia } from '../utils';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = { res: null, type: 'start' };
  }

  componentDidMount () {
    emitter.on('search', (state) => {

      this.setState({ res: null, type: 'loading' });

      reqwest({
        url: 'https://itunes.apple.com/search?media=' + getMedia(state.media || 'all') + '&term=' + state.query.split(' ').join('+'),
        type: 'jsonp'
      })
      .then(res => this.setState({ res, type: res.resultCount || 'noContent'}))
      .fail(err => this.setState({ res: null, type: 'error' }))
      .always(() => emitter.emit('resetLoader'));
    });

  }

  componentWillUnmount () {
    emitter.removeListener('search');
  }

  render () {

    return (
      <div style={{
        margin: '50px auto',
        maxWidth: '900px'
        }}>
        <Message type={this.state.type} />
        <List res={this.state.res} />
      </div>
    );
  }

}

export default Container;
