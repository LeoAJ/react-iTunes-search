import React from 'react';
import Header from './Header';
import Container from './Container';
import Ribbon from './Ribbon';
import { StyleRoot } from 'radium';

const App = () => {
  return (
    <StyleRoot>
      <Header />
      <Container />
      <Ribbon />
    </StyleRoot>
  );
};

export default App;
