import React from 'react';
import classnames from 'classnames';

const Message = (({ iconColor, icon, headerMsg, bodyMsg }) => (
  <div className={classnames('ui', 'icon', 'message', iconColor)}>
    <i className={classnames('icon', icon)}></i>
    <div className="content">
      <div className="header">{headerMsg}</div>
      <p>{bodyMsg}</p>
    </div>
  </div>
));

export default Message;
