import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

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

class Message extends Component {

  render () {

    const msg = msgMap[this.props.type];

    return (
      <div>
        {msg ? (
          <div className={classnames('ui', 'icon', 'message', msg.iconColor)}>
            <i className={classnames('icon', msg.icon)}></i>
            <div className="content">
              <div className="header">{msg.headerMsg}</div>
              <p>{msg.bodyMsg}</p>
            </div>
          </div>
        ) : null}
      </div>
    );

  }

}

export default Message;
