import React, { useContext } from 'react'
import { AuthContext } from '../components/context/AuthContext'

function Recipes() {

  const { user, isAdmin } = useContext(AuthContext);

  return (
    <>
        <h1>Hello world</h1>
        <p>{isAdmin}</p>
        {user ? (
          <p>{user.username}</p>
          
        ) : 
        (
          <p>asd</p>
        )} 

        {isAdmin && <p>Si es admin</p> }
    </>
  )
}

export default Recipes
