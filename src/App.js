import React from 'react';
import './App.css';

import Forms from './Form.js';
import { Title, MainForm } from './Theme.js';

function App() {
  return (
    <div className="App">
      <MainForm>
        <Title>Sign Up or Log In</Title>
        <Forms />
      </MainForm>
    </div>
  );
}

export default App;
