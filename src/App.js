import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeaderTable from './Components/LeaderTable.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Free Code Camp Leader Board</h2>
        </div>
        <p className="App-intro">
        <LeaderTable />
        </p>
      </div>
    );
  }
}

export default App;
