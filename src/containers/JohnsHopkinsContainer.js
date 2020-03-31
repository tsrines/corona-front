import React from 'react'


class JohnsHopkinsContainer extends React.Component {

  state = {

  }

  getHopkins = () => {
    fetch(`https://corona.lmao.ninja/jhucsse`)
      .then(resp => resp.json())
      .then(data => this.setState({ hopkins: data }))
  }
  componentDidMount() {
    this.getHopkins()
  }

  render (){
    return (
      <h1>JohnsHopkins Container</h1>
    )
  }
}

export default JohnsHopkinsContainer