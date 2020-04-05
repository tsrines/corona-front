import React from 'react'
import { Table, Form, Input, Button, Icon } from 'semantic-ui-react'
import CountryCell from '../components/CountryCell'


class CountriesContainer extends React.Component {

  state = {
    countries: [],
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
    let countries = this.state.countries.filter(country => country.country.toLowerCase().includes(this.state.search.toLowerCase()))

    let displayCountries = countries.map((country, index) => {

      return <CountryCell key={index} {...country} />
    })


    return displayCountries
  }

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
  
    return (
      <div>
        {/* <MapContainer /> */}
        <Form>
          <Input placeholder='Search...' type='text' name="search" value={this.state.search} onChange={(e) => this.handleSearch(e)}></Input>
        </Form>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Last Updated</Table.HeaderCell>
              <Table.HeaderCell>Country</Table.HeaderCell>

              <Table.HeaderCell>Cases {<Button size='mini' icon='arrow alternate circle down' />}</Table.HeaderCell>
              <Table.HeaderCell>Cases Today{<Button
                // onClick={() => this.addFavorite(this.vehicle)}
                color={'twitter'}
                icon='heart outline'
              />}</Table.HeaderCell>
              <Table.HeaderCell>Cases Per 1 Million</Table.HeaderCell>
              <Table.HeaderCell>Deaths</Table.HeaderCell>
              <Table.HeaderCell>Deaths Today</Table.HeaderCell>
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

