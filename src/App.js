import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    countries: [],
    states: [],
    hopkins: []
  }


  getCountries = () => {
    fetch(`https://corona.lmao.ninja/countries`)
    .then(resp => resp.json())
    .then(data => this.setState({countries: data}))
  }
  getStates = () => {
    fetch(`https://corona.lmao.ninja/states`)
    .then(resp => resp.json())
    .then(data => this.setState({states: data}))
  }
  
  getHopkins = () => {
    fetch(`https://corona.lmao.ninja/jhucsse`)
    .then(resp => resp.json())
    .then(data => this.setState({hopkins: data}))
  }

  componentDidMount() {
    this.getCountries()
    this.getStates()
    this.getHopkins()
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <h1>Daily Corona Check-In</h1>
      </div>
    );
  }
}

export default App;
