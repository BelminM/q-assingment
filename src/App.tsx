import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import AppContainer from './AppContainer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppContainer />
      </HashRouter>
    </div>
  );
}

export default App;
