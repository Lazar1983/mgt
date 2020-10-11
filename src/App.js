import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://magic.wizards.com/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Magic: The Gathering
          </a>
        </header>
      </div>
    );
  }
}

export default App;
