import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Countries from './components/countries';
class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
         
        </header>
        <Countries />
      </div>
     );
  }
}
export default App;
