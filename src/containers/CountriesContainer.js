import React from 'react'
import { Table, Form, Input } from 'semantic-ui-react'
import CountryCell from '../components/CountryCell'
import _ from 'lodash'



class CountriesContainer extends React.Component {

  state = {
    column: null,
    direction: null,
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
    let displayCountries = countries.map((country, index) => <CountryCell key={index} {...country} />)


    return displayCountries
  }

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSort = (clickedColumn) => () => {
    const { column, countries, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        countries: _.sortBy(countries, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      countries: countries.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }


  render() {
    const { column, direction, search } = this.state
    return (
      <div>
        {/* <MapContainer /> */}
        <Form>
          <Input placeholder='Search...' type='text' name="search" value={search} onChange={(e) => this.handleSearch(e)}></Input>
        </Form>
        <Table sortable celled singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'updated' ? direction : null}
                onClick={this.handleSort('updated')}
              >
                Last Updated
                </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'country' ? direction : null}
                onClick={this.handleSort('country')}
              >
                Country
                </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'cases' ? direction : null}
                onClick={this.handleSort('cases')}
              >
                Cases
                </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'todayCases' ? direction : null}
                onClick={this.handleSort('todayCases')}
              >
                Cases Today
                </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'casesPerOneMillion' ? direction : null}
                onClick={this.handleSort('casesPerOneMillion')}
              >
                Cases Per 1 Million
                </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'deaths' ? direction : null}
                onClick={this.handleSort('deaths')}
              >
                Deaths</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'todayDeaths' ? direction : null}
                onClick={this.handleSort('todayDeaths')}
              >
                Deaths Today
                </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'deathsPerOneMillion' ? direction : null}
                onClick={this.handleSort('deathsPerOneMillion')}
              >
                Deaths Per 1 Million
                </Table.HeaderCell>
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

