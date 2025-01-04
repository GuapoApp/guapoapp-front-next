import { createContext, useState, useContext } from 'react'

const SessionContext = createContext()

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({})
  const [sessionDate, setSessionDate] = useState()
  const [sessionTime, setSessionTime] = useState()
  const [sessionConsultantId, setSessionConsultantId] = useState()
  const [sessionConsultantName, setSessionConsultantName] = useState()
  const [sessionConsultantPhoto, setSessionConsultantPhoto] = useState()
  const [sessionProfesionalId, setSessionProfesionalId] = useState()
  // const [sessionConsultantId, setSessionConsultantId] = useState()

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
        sessionDate,
        setSessionDate,
        sessionTime,
        setSessionTime,
        sessionConsultantId,
        setSessionConsultantId,
        sessionConsultantName,
        setSessionConsultantName,
        sessionConsultantPhoto,
        setSessionConsultantPhoto,
        sessionProfesionalId,
        setSessionProfesionalId
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSessionContext = () => useContext(SessionContext)
