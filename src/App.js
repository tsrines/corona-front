import React from 'react';
import Main  from './containers/Main.js'
import './App.css';

class App extends React.Component {
  state = {
    countries: [],
    states: [],
    hopkins: []
  }

  render() {
    return (
      <div className="App">
        <h1>Daily Corona Check-In</h1>
        <Main />
      </div>
    );
  }
}

export default App;
