import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import Home from './src/Home';
import utils from './tailwind.json';

const App = () => {
  return (
    <TailwindProvider utilities={utils}>
      <Home />
    </TailwindProvider>
  );
};

export default App;
