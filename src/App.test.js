import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LeaderTable from './components/LeaderTable';
import CamperList from './components/CamperList';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('LeaderTable renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeaderTable />, div);
});
it('CamperList renders without crashing', () => {
  const div = document.createElement('div').appendChild('table');
  ReactDOM.render(<CamperList />, div);
});
