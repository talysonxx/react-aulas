import React, {useState, createContext} from 'react'

export const ContadorContexto = createContext()

export function ContadorProvider(props) {
  const [cont, setCont] = useState(10)

  return (
    <ContadorContexto.Provider value={[cont, setCont]}>
      {props.children}
    </ContadorContexto.Provider>
  )
}
