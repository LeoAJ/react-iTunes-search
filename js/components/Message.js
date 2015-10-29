import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Message extends Component {

  render () {

    const {msgInfo} = this.props;

    return (
      <div className={classNames('ui', 'icon', 'message', msgInfo.iconColor, {
        'hidden': !msgInfo
      })}>
        <i className={classNames('icon', msgInfo.icon)}></i>
        <div className="content">
          <div className="header">{msgInfo.headerMsg}</div>
          <p>{msgInfo.bodyMsg}</p>
        </div>
      </div>
    );

  }

}

Message.propTypes = {
  msgInfo: PropTypes.string.isRequired
};

export default Message;
