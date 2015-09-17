import React from 'react';
import List from './List';
import Message from './Message';
import emitter from '../emitter';
import reqwest from 'reqwest';
import { getMedia } from '../utils';

let msg = {
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

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      res: null,
      msgInfo: msg.start
    };
  }

  componentDidMount () {
    emitter.on('search', (state) => {

      this.setState({
        res: null,
        msgInfo: msg.loading
      });

      reqwest({
        url: 'https://itunes.apple.com/search?media=' + getMedia(state.media || 'all') + '&term=' + state.query.split(' ').join('+'),
        type: 'jsonp'
      })
      .then((res) => {
        this.setState({
          res: res,
          msgInfo: res.resultCount ? false : msg.noContent
        });
      })
      .fail((err) => {
        this.setState({
          res: null,
          msgInfo: msg.error
        });
      })
      .always(() => {
        emitter.emit('resetLoader');
      });
    });

  }

  componentWillUnmount () {
    emitter.removeListener('search');
  }

  render () {

    return (
      <div className="container">
        <Message msgInfo={this.state.msgInfo} />
        <List res={this.state.res} />
      </div>
    );
  }

}

export default Container;
