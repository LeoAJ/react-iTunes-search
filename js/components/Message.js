import React from 'react';
import classNames from 'classnames';

class Message extends React.Component {

  render () {

    let {msgInfo} = this.props;

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

export default Message;
