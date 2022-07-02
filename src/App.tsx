import * as React from 'react';
import Example2 from './components/button/button';
import Navigation from './components/menu/menu';
import Safetech from './pages/safetech/safetech-page';

const logo = require('./logo.svg');

function App() {
  return (
    <div className="App">
      <Example2/>
      <Safetech/>
    </div>
  );
}

export default App;