import { createContext, useState, useContext } from 'react'

const SessionContext = createContext()

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({})
  const [sessionDate, setSessionDate] = useState()
  const [sessionTime, setSessionTime] = useState()

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
        sessionDate,
        setSessionDate,
        sessionTime,
        setSessionTime
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSessionContext = () => useContext(SessionContext)
