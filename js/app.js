import React from 'react';
import App from './components/App';

import '../css/app.css';
import ribbon from '../css/img/ribbon.png';

// add github ribbon
let img = document.createElement('img');
img.src = 'dist/' + ribbon;
img.classList.add('ribbon');
document.querySelector('#github-ribbon').appendChild(img);

React.render(
  <App />,
  document.querySelector('#itunes-search')
);