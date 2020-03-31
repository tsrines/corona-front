import React from 'react'


class StatesContainer extends React.Component {

  state =  {states: []}

  getStates = () => {
    fetch(`https://corona.lmao.ninja/states`)
      .then(resp => resp.json())
      .then(states => this.setState({ states }))
  }
  componentDidMount() {
    this.getStates()
  }


  render (){
    console.log("this.state.states from statescontainer", this.state.states)
    return (
      <h1>States Container</h1>
    )
  }
}

export default StatesContainer