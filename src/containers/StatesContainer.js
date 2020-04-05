import React from 'react'
import StateCell from '../components/StateCell'
import {Table, Button} from 'semantic-ui-react'


class StatesContainer extends React.Component {

  state =  {states: [], search: ""}

  getStates = () => {
    fetch(`https://corona.lmao.ninja/states`)
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


  render (){
    return (
      <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>State</Table.HeaderCell>
          <Table.HeaderCell>Cases {<Button size='mini' icon='arrow alternate circle down' />}</Table.HeaderCell>
          <Table.HeaderCell>Cases Today{<Button
            // onClick={() => this.addFavorite(this.vehicle)}
            color={'twitter'}
            icon='heart outline'
          />}</Table.HeaderCell>
          <Table.HeaderCell>Active Cases</Table.HeaderCell>
          <Table.HeaderCell>Deaths</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {this.displayStates()}
      </Table.Body>
    </Table>
    )
  }
}

export default StatesContainer