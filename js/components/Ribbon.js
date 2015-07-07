import React from 'react';
import ribbon from '../../css/img/ribbon.png';

class Ribbon extends React.Component {

  render () {

    let src = 'dist/' + ribbon;

    return (

      <a target="_blank" href="https://github.com/LeoAJ">
        <img src={src} className="ribbon" />
      </a>

    );

  }

}

export default Ribbon;
