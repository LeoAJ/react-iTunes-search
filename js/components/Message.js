// @flow
import React, { PropTypes } from 'react';
import cx from 'classnames';

const Message = ({
  iconColor,
  icon,
  headerMsg,
  bodyMsg
}: {
  iconColor: string,
  icon: string,
  headerMsg: string,
  bodyMsg: string
}) => (
  <div className={cx('ui', 'icon', 'message', iconColor)}>
    <i className={cx('icon', icon)} />
    <div className="content">
      <div className="header">{headerMsg}</div>
      <p>{bodyMsg}</p>
    </div>
  </div>
);

export default Message;
