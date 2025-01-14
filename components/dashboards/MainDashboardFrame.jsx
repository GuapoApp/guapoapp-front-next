import DashboardNavbar from './DashboardNavbar'
import CurvedBackground from '../CurvedBackground'

import { useUserContext } from '@/context/UserContext'
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

const MainDashboardFrame = ({ footerColor, children }) => {
  const [role, setRole] = useState('')
  const { token } = useUserContext()

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token)
      if (decoded) {
        setRole(decoded.Role)
      }
    }
  }, [])

  return (
    <main
      className={`box-content bg-contrast-slateGray50 min-h-screen w-full flex flex-col ${cabin.className}`}
    >
      <DashboardNavbar role={role} />
      <section className='flex flex-row justify-center items-center m-auto w-full h-4/6 gap-5'>
        {children}
      </section>
      {/* Curved Background */}
      <div className='h-24 w-full'>
        <CurvedBackground color={footerColor} />
      </div>
    </main>
  )
}

export default MainDashboardFrame
