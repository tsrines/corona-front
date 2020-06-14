import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Main from './containers/Main';
import MapContainer from './components/MapContainer'
import { UserContext } from './UserContext';
import StateBorders from './components/StateBorders'

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={routerProps => <Main className='App' {...routerProps} />}
          />
          <Route
            exact
            path='/states/:id'
            render={routerProps => <StateBorders {...routerProps} />}
          />
          <Route
            exact
            path='/map'
            render={routerProps => <MapContainer {...routerProps} />}
          />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App
