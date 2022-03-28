import React from 'react'
import { AuthContext } from '../Contexts/AuthContext';

export const LoginStatus =() => {
    const { logout, token } = React.useContext(AuthContext);
  return (
    <div>
      <h1>{token}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
