import { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')
  const [userId, setUserId] = useState('')
  const [professionalId, setProfessionalId] = useState('')
  const [consultantId, setConsultantId] = useState('')

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        role,
        setRole,
        userId,
        setUserId,
        professionalId,
        setProfessionalId,
        consultantId,
        setConsultantId
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
