import React from 'react';
import logo from './logo.svg';
import './App.css';
import Socket from './Socket'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Socket/>
      </header>
    </div>
  );
}

export default App;
