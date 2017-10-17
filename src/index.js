import 'babel-polyfill';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import App from './components/App';

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
