import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

// import semantic UI
import '../css/semantic-ui/button.min.css';
import '../css/semantic-ui/card.min.css';
import '../css/semantic-ui/container.min.css';
import '../css/semantic-ui/dropdown.min.css';
import '../css/semantic-ui/grid.min.css';
import '../css/semantic-ui/header.min.css';
import '../css/semantic-ui/icon.min.css';
import '../css/semantic-ui/input.min.css';
import '../css/semantic-ui/message.min.css';
import '../css/semantic-ui/reset.min.css';
import '../css/semantic-ui/search.min.css';
import '../css/semantic-ui/segment.min.css';
import '../css/semantic-ui/site.min.css';
import '../css/semantic-ui/transition.min.css';

const renderApp = Comp => render(
  <AppContainer>
    <Comp />
  </AppContainer>,
  document.querySelector('#itunes-search')
);

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/App', _ => renderApp(App));
}
