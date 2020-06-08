import React from 'react'
import { Fragment } from 'react'
import CountriesContainer from './CountriesContainer'
import JohnsHopkinsContainer from './JohnsHopkinsContainer'
import StatesContainer from './StatesContainer'
import { Form, Radio } from 'semantic-ui-react'
// import MapContainer from './MapContainer'


class Main extends React.Component {

  state = {}
  handleChange = (e, { value }) => this.setState({ value })
  // toMap = () => this.setState({value: null})
  render() {

    return (
      <Fragment>
        <Form>
          <Form.Field>
            <Radio
              label='Countries'
              name='radioGroup'
              value='countries'
              checked={this.state.value === 'countries'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='States'
              name='radioGroup'
              value='states'
              checked={this.state.value === 'states'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Johns Hopkins Data'
              name='radioGroup'
              value='cases'
              checked={this.state.value === 'cases'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
        {this.state.value === 'countries' && <CountriesContainer />}
        {this.state.value === 'states' && <StatesContainer />}
        {/* {this.state.value === 'cases' && <JohnsHopkinsContainer />} */}
      </Fragment>
    )
  }
}

export default Main 