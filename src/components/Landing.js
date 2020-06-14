import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { login } from "./Login";
import {A} from './a'



export const Landing = (props) => {
  const { user, setUser } = useContext(UserContext)
  console.log(A.type)
  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(A.type, null, 2)}</pre>
      <h2>Hi!!!!!!!!!!</h2>
      <button onClick={async () => {
        const user = await login()
        setUser(user)
      }}
      >
        Click
        </button>
    </>
  )
}