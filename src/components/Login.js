import React from 'react';

const login = props => {
  console.log(props);

  // even though the prop has not changed when repetedly pressing one button, react will rerender that component

  return (
    <>
    <button onClick={props.onLogin}>Login</button>
    <button onClick={props.onLogout}>Logout</button>
    </>
    )
};

export default login;
