import React from 'react';
import BaseComponent from './BaseComponent';
import Header from './Header';
import Container from './Container';

class App extends BaseComponent {

  render () {
    return (
      <div>
        <Header />
        <Container />
      </div>
    );
  }

}

export default App;