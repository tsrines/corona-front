import React from 'react'
import StateCell from '../components/StateCell'
import { Table, Form, Input } from 'semantic-ui-react'
import _ from 'lodash'
import {STATES} from '../resources/endpoints'


class StatesContainer extends React.Component {

  state = {
    states: [],
    search: "",
    column: null,
    direction: null,
  }

  getStates = () => {
    fetch(STATES)
      .then(resp => resp.json())
      .then(states => this.setState({ states }))
  }
  componentDidMount() {
    this.getStates()
  }

  displayStates = () => {
    let states = this.state.states.filter(state => state.state.toLowerCase().includes(this.state.search.toLowerCase()))

    let displayStates = states.map((state, index) => {

      return <StateCell key={index} {...state} />
    })


    return displayStates
  }

  handleSearch = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSort = (clickedColumn) => () => {
    const { column, states, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        states: _.sortBy(states, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      states: states.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }


  render() {
    const { column, direction, search } = this.state

    return (
      <div>
        <Form>
          <Input placeholder='Search...' type='text' name="search" value={search} onChange={(e) => this.handleSearch(e)}></Input>
        </Form>

        <Table sortable celled singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'state' ? direction : null}
                onClick={this.handleSort('state')}
              >
                State
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
                sorted={column === 'active' ? direction : null}
                onClick={this.handleSort('active')}

              >
                Active Cases
            </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'deaths' ? direction : null}
                onClick={this.handleSort('deaths')}
              >
                Deaths
          </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'tests' ? direction : null}
                onClick={this.handleSort('tests')}
              >
                Tests
          </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === 'testsPerOneMillion' ? direction : null}
                onClick={this.handleSort('testsPerOneMillion')}
              >
                Tests Per One Million
          </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.displayStates()}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default StatesContainer