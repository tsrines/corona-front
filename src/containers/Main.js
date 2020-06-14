import React from 'react';
// import { Fragment } from 'react';
// import CountriesContainer from './CountriesContainer';
import StatesContainer from './StatesContainer';
import { Form, Radio } from 'semantic-ui-react';
import StateBorders from '../components/StateBorders';

class Main extends React.Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
  // toMap = () => this.setState({value: null})
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <StateBorders />
        <div>
          <Form className='App'>
            {/* <Form.Field>
              <Radio
                label='Countries'
                name='radioGroup'
                value='countries'
                checked={this.state.value === 'countries'}
                onChange={this.handleChange}
              />
            </Form.Field> */}
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
              {/* <Radio
              label='Johns Hopkins Data'
              name='radioGroup'
              value='cases'
              checked={this.state.value === 'cases'}
              onChange={this.handleChange}
            /> */}
            </Form.Field>
          </Form>
          {/* {this.state.value === 'countries' && <CountriesContainer />} */}
          {this.state.value === 'states' && <StatesContainer />}
        </div>
      </div>
    );
  }
}

export default Main;
