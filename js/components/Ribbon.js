import React from 'react';
import ribbon from '../../css/img/ribbon.png';

class Ribbon extends React.Component {

  render () {

    return (

      <a target="_blank" href="https://github.com/LeoAJ">
        <img src={ribbon.indexOf('dist') === -1 ? 'dist/' + ribbon : ribbon.substring(1)} className="ribbon" />
      </a>

    );

  }

}

export default Ribbon;
