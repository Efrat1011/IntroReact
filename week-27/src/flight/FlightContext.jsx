import React, { createContext, useState } from 'react'

export const FlightContext = createContext()


export function FlightProvider({ children }) {
  const [flight, setFlight] = useState([])
  const [booking, setBooking] = useState([])

  return (
    <FlightContext.Provider value={{
      flight, setFlight,
      booking, setBooking
    }}>
      {children}
    </FlightContext.Provider>
  )
}
