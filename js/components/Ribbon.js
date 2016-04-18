import React, { Component } from 'react';
import ribbon from '../../css/img/ribbon.png';
import jss from 'jss';

const style = {
  ribbon: {
    position: 'absolute',
    top: 0,
    right: 0,
    border: 0,
    'z-index': 100
  },
  '@media (max-width: 768px)': {
    ribbon: {
      display: 'none'
    }
  }
};

const { classes } = jss.createStyleSheet(style).attach();

const Ribbon = () => (
  <a target="_blank" href="https://github.com/LeoAJ/react-iTunes-search">
    <img alt="img"
      className={classes.ribbon}
      src={
      ribbon.indexOf('dist') === -1
        ? `dist/${ribbon}`
        : ribbon.substring(1)
      }
    />
  </a>
);

export default Ribbon;
