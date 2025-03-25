import React, { createContext, useState } from 'react'

export const LoaderContext = createContext();

export const LoaderProvider = ({children}) => {

  const [isLoading, setIsLoading] = useState(false);

  const toogleLoading = (state) => {
    setIsLoading(state);
  }

  return (
    <LoaderContext.Provider value={{isLoading, toogleLoading}}>
        {children}
    </LoaderContext.Provider>
  )
}

