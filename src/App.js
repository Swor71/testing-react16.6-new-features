import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import Posts from './components/Posts';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
        <nav>
          <NavLink to='/user'>User Page</NavLink> &nbsp;
          <NavLink to='/posts'>Posts Page</NavLink>
        </nav>
        <Route exact path='/' component={Welcome} />
        <Route path='/user' component={User} />
        <Route path='/posts' component={Posts} />
        </>
      </BrowserRouter>
    )
  }
}

export default App;