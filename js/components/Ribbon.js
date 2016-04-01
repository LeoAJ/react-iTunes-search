import React, { Component } from 'react';
import ribbon from '../../css/img/ribbon.png';
import { StyleSheet, css } from 'aphrodite';

const style = StyleSheet.create({
  ribbon: {
    position: 'absolute',
    top: 0,
    right: 0,
    border: 0,
    zIndex: 100,
    '@media (max-width: 768px)': {
      display: 'none'
    }
  }
});

const Ribbon = () => (
  <a target="_blank" href="https://github.com/LeoAJ/react-iTunes-search">
    <img src={ribbon.indexOf('dist') === -1
              ? `dist/${ribbon}`
              : ribbon.substring(1)} className={css(style.ribbon)} />
  </a>
);

export default Ribbon;
