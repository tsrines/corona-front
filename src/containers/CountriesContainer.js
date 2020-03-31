import React from 'react'



class CountriesContainer extends React.Component {

  state = {
    countries: [],
    displayCountries: []
  }

  getCountries = () => {
    fetch(`https://corona.lmao.ninja/countries`)
      .then(resp => resp.json())
      .then(countries => this.setState({ countries, displayCountries: countries }))
  }
  componentDidMount() {
    this.getCountries()
  }


  render (){
    console.log("this.state from CountriesContainer", this.state)
    return (
      <h1>Countries Container</h1>
    )
  }
}

export default CountriesContainer