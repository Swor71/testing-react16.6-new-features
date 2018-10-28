import React, { Component, Suspense } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import User from './components/User';

const Posts = React.lazy(() => import('./components/Posts')); // named imports are not supported

class App extends Component {

  state = { show: false };

  toggleHandler = () => {
    this.setState(prevState => ({show: !prevState.show}) )
  }

  render() {
    return (
      <>
      <button onClick={this.toggleHandler}>Toggle</button>
      {this.state.show ? (<Suspense fallback={<div>Loading...</div>}><Posts /></Suspense>) : <User />}
      </>
      
      // <BrowserRouter>
      //   <>
      //   <nav>
      //     <NavLink to='/user'>User Page</NavLink> |&nbsp;
      //     <NavLink to='/posts'>Posts Page</NavLink>
      //   </nav>
      //   <Route exact path='/' component={Welcome} />
      //   <Route path='/user' component={User} />
      //   <Route path='/posts' render={() => <Suspense fallback={<div>Loading...</div>}><Posts /></Suspense> } />
      //   </>
      // </BrowserRouter>
    )
  }
}

export default App;