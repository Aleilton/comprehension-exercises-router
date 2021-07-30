import React, { Component } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/users" >Users</Link>
        <Link to="/strict-access" >Strict Access</Link>
          <Switch>
          <Route
            path="/strict-access"
            render={ () => (
              <StrictAccess user={ { username: 'joao', password: '1234' } } />
            )}
          />
                <Route
                  path="/users/:id"
                  render={(props) => <Users {...props} greetingsMessage={"Good Morning"} /> } 
                />
                <Route path="/about" component={About} />
                <Route exact path="/" component={Home} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
