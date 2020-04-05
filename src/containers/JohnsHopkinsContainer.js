import React from 'react'
import JohnHopkinsCell from '../components/JohnsHopkinsCell'
import { Button, Table } from 'semantic-ui-react'

class JohnsHopkinsContainer extends React.Component {

  state = {
    cases: [],
    search: ""
  }

  getHopkins = () => {
    fetch(`https://corona.lmao.ninja/v2/jhucsse`)
      .then(resp => resp.json())
      .then(cases => this.setState({ cases }, () => console.log(cases)))
  }
  componentDidMount() {
    this.getHopkins()
  }

  displayJohnsHopkins = () => {
    // let cases = this.state.cases.filter(stat => {
    //   try {
    //     stat.province.toLowerCase().includes(this.state.search.toLowerCase())
    //   } catch (error) {
    //     console.log(error.message)
    //   }
    // })

    let displayJohnsHopkins = this.state.cases.map((stat, index) => {

      return <JohnHopkinsCell key={index} {...stat} />
    })
    return displayJohnsHopkins
  }

  render() {
    console.log("JohnsHopkinsContainer Render Method, this.state: ", this.state)
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Updated</Table.HeaderCell>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>Province {<Button size='mini' icon='arrow alternate circle down' />}</Table.HeaderCell>
            <Table.HeaderCell>Confirmed Cases{<Button
              // onClick={() => this.addFavorite(this.vehicle)}
              color={'twitter'}
              icon='heart outline'
            />}</Table.HeaderCell>
            <Table.HeaderCell>Confirmed Deaths</Table.HeaderCell>
            <Table.HeaderCell>Recovered</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.displayJohnsHopkins()}
        </Table.Body>
      </Table>
    )
  }
}

export default JohnsHopkinsContainer