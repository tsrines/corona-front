import React from 'react';
import Main  from './containers/Main.js'
import {Link, Switch, Path} from 'react-router-dom'
import './App.css';

class App extends React.Component {
  state = {
    countries: [],
    states: [],
    hopkins: []
  }

  render() {
    return (
      <div className="App">
        <h1>Corona Daily Check-In</h1>
        {/* <NavBar currentUser={this.state.currentUser} searchTerm={this.state.searchTerm} handleChange={this.handleChange} logout={this.logout} cardMode={this.cardMode} listMode={this.listMode}/> */}
        <Switch>
          {/* <Route path="/login" render={() => <LoginForm setUser={this.setUser}/>}/>
          <Route path="/signup" render={() => <SignupForm setUser={this.setUser}/>}/> */}
          {/* <Route path="/main" render={(routerProps) => <Main {...routerProps} />} /> */}

          {/* Fall through route - notice the lack of a path. If the URL entered by a user matches none of the above routes, this route will be hit (think default case in a switch statement */}
          
          {/* <Route render={() => <h1>These are not the routes you are looking for...</h1>} />  */}
        </Switch>
        <Main />
      </div>
    );
  }
}
export default App;
