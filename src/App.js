import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LeaderTable from './Components/LeaderTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>FreeCodeCamp Leaderboard</h2>
        </div>
        <LeaderTable />
      </div>
    );
  }
}

export default App;
