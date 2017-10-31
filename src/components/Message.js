// @flow
import React, { PropTypes } from 'react';
import '../style/Message.css';

const msgMap: Object = {
  init: {
    icon: 'music_note',
    msg: 'Welcome back!'
  },
  loading: {
    msg: 'Loading...'
  },
  noContent: {
    icon: 'info',
    msg: 'No match'
  },
  error: {
    icon: 'error',
    msg: 'Error!'
  }
};

const spinner = _ => (
  <div className="sk-circle">
    <div className="sk-circle1 sk-child" />
    <div className="sk-circle2 sk-child" />
    <div className="sk-circle3 sk-child" />
    <div className="sk-circle4 sk-child" />
    <div className="sk-circle5 sk-child" />
    <div className="sk-circle6 sk-child" />
    <div className="sk-circle7 sk-child" />
    <div className="sk-circle8 sk-child" />
    <div className="sk-circle9 sk-child" />
    <div className="sk-circle10 sk-child" />
    <div className="sk-circle11 sk-child" />
    <div className="sk-circle12 sk-child" />
  </div>
);

const Message = ({ status }: { status: string }) => (
  <div className="toast">
    {status === 'loading' ? spinner() : <i className="material-icons">{msgMap[status].icon}</i>}
    <span className="text">{msgMap[status].msg}</span>
  </div>
);

export default Message;
