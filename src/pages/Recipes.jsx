import React, { useContext } from 'react'
import { AuthContext } from '../components/context/AuthContext'

function Recipes() {

  const { user } = useContext(AuthContext);

  return (
    <>
        <h1>Hello world</h1>
        {user ? (
          <p>{user.username}</p>
        ) : 
        (
          <p>asd</p>
        )}
        
    </>
  )
}

export default Recipes
