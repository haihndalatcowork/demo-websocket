import React from 'react';
import socketIOClient from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        const socket = socketIOClient('http://localhost:5000');
        socket.on();
    }

    render(){
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
              </header>
          </div>
      );
  }
}

export default App;
