import { createContext } from 'react'
import React from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  return (
     <>
      <AuthContext.Provider value={{}} >{children}</AuthContext.Provider>
     </>
  )
}

 