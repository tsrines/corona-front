import React from 'react'
import { Table, Form, Input } from 'semantic-ui-react'
import CountryCell from '../components/CountryCell'

class CountriesContainer extends React.Component {

  state = {
    countries: [],
    displayCountries: [],
    search: ""
    
  }

  getCountries = () => {
    fetch(`https://corona.lmao.ninja/countries`)
      .then(resp => resp.json())
      .then(countries => this.setState({ countries }))
  }
  componentDidMount() {
    this.getCountries()
  }

  displayCountries = () => {
    let countries = this.state.countries.filter(country => country.country.includes(this.state.search))

    let displayCountries = countries.map(country => <CountryCell key={country.country} {...country} />)
    // console.log("displayCountries inside function: ", displayCountries)
    // console.log("displayCountries after map", displayCountries)

    return displayCountries
  }

  handleSearch = (e) => { 
      this.setState({
        [e.target.name]: e.target.value
      }, () => console.log(this.state.search))
  }

  render() {
    console.log("this.state from CountriesContainer", this.state)
    return (
      <div>
      <Form>
        <Input placeholder='Search...' type='text' name="search" value={this.state.search} onChange={(e)=> this.handleSearch(e)}></Input>
      </Form>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Country</Table.HeaderCell>
              <Table.HeaderCell>Cases</Table.HeaderCell>
              <Table.HeaderCell>Cases Today</Table.HeaderCell>
              <Table.HeaderCell>Cases Per 1 Million</Table.HeaderCell>
              <Table.HeaderCell>Deaths</Table.HeaderCell>
              <Table.HeaderCell>Deaths Per 1 Million</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            
              {this.displayCountries()} 
            

          </Table.Body>
        </Table>

      </div>
    )
  }
}

export default CountriesContainer