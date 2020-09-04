import React from 'react';
import logo from './logo.png';
import 'bulma/css/bulma.css'
import './App.css';
import './App.sass';

function App() {
  return (
    <div className="App">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <img src={logo} alt="logo" class="logo"/>
        </div>
      </nav>
      
    </div>
  );
}

export default App;
