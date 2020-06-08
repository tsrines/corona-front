import React from 'react'
import JohnHopkinsCell from '../components/JohnsHopkinsCell'
import { Table, Form, Input } from 'semantic-ui-react'
import _ from 'lodash'
import {JOHNSHOPKINS} from '../resources/endpoints'

class JohnsHopkinsContainer extends React.Component {

  state = {
    column: null,
    direction: null,
    cases: [],
    search: ""
  }

  getHopkins = () => {
    fetch(JOHNSHOPKINS)
      .then(resp => resp.json())
      .then(cases => this.setState({ cases }))
  }
  componentDidMount() {
    this.getHopkins()
  }

  displayJohnsHopkins = () => {
    const { cases, search } = this.state
    let filteredCases = [...cases].filter(item => item.country.toLowerCase().includes(search.toLowerCase()))

    let displayJohnsHopkins = filteredCases.map((stat, index) => {

      return <JohnHopkinsCell key={index} {...stat} />
    })
    return displayJohnsHopkins
  }
  handleSearch = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSort = (clickedColumn) => () => {
    const { column, cases, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        cases: _.sortBy(cases, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      cases: cases.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, direction, search } = this.state

    return (
      <>
        {JSON.stringify(this.state.cases[0], null, 2)}
        <Form>
          <Input placeholder='Search...' type='text' name="search" value={search} onChange={(e) => this.handleSearch(e)}></Input>
        </Form>
        <Table sortable celled singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'updated' ? direction : null}
                onClick={this.handleSort('updated')}
              >Updated
            </Table.HeaderCell>

              <Table.HeaderCell
                sorted={column === 'country' ? direction : null}
                onClick={this.handleSort('country')}>Country</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'province' ? direction : null}
                onClick={this.handleSort('province')}
              >Province </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'confirmed' ? direction : null}
                onClick={this.handleSort('confirmed')}
              >Confirmed Cases

            </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'deaths' ? direction : null}
                onClick={this.handleSort('deaths')}
              >Confirmed Deaths</Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'recovered' ? direction : null}
                onClick={this.handleSort('recovered')}
              >Recovered</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.displayJohnsHopkins()}
          </Table.Body>
        </Table>
      </>
    )
  }
}

export default JohnsHopkinsContainer


