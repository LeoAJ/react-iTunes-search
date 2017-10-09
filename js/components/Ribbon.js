import React, { Component } from 'react';
import ribbon from '../../css/img/ribbon.png';
import '../../css/ribbon.css';

const Ribbon = () => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/LeoAJ/react-iTunes-search"
  >
    <img
      alt="img"
      className="ribbon"
      src={
        ribbon.indexOf('dist') === -1
          ? `dist/${ribbon}`
          : ribbon.substring(1)
      }
    />
  </a>
);

export default Ribbon;
