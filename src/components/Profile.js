import React from 'react'

import AuthContext from '../auth-context';

const profile = props => (
  <AuthContext.Consumer>
    {authContext => {
      return (
        <h1>{authContext.isAuth ? 'You\'re logged in' : 'Not logged in'}</h1>
      );
    }}
  </AuthContext.Consumer>
)

export default profile;