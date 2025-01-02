import DashboardMenu from '@/components/dashboards/DashboardMenu'
import DashboardTitleHeader from '@/components/dashboards/DashboardTitleHeader'
import Header5 from '@/components/Header5'
import SquareLink from '@/components/SquareLink'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'
import AvailableConsultants from '@/components/dashboards/AvailableConsultants'

import { useSessionContext } from '@/context/SessionContext'

import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'

const SessionConsultant = () => {
  const [role, setRole] = useState('')
  const [token, setToken] = useState(localStorage.token)

  const {
    session,
    setSession,
    sessionDate,
    setSessionDate,
    sessionTime,
    setSessionTime
  } = useSessionContext()

  useEffect(() => {
    // setToken(localStorage.token)
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setRole(decoded.Role)
    }

    // console.log('Token in Select Consultant:', token)
    // console.log('Token in Select Consultant Local:', localStorage.token)
    // console.log('Session in Select Consultant:', session)
    // console.log('Session Date in Select Consultant:', sessionDate)
    // console.log('Session Time in Select Consultant:', sessionTime)
    console.log(token)
  }, [])

  console.log(token)

  const router = useRouter()

  const goBack = (e) => {
    e.preventDefault()
    router.push('/profesional/agenda')
  }

  return (
    <MainDashboardFrame footerColor='bg-primary-brownPod700'>
      {/* Menu */}
      <div className='w-2/6 flex flex-row h-full'>
        <DashboardMenu role={role} />
      </div>
      {/* Select Consultant */}
      <div className='flex flex-col w-4/6 gap-7'>
        {/* Header */}
        <div>
          <DashboardTitleHeader
            title='AGENDA'
            squareColor='bg-primary-brownPod700'
            titleColor='text-primary-brownPod800'
          />
        </div>
        {/* Title */}
        <div className='flex flex-row w-full'>
          <Header5
            text='Escoge a tu asesor'
            textColor='text-primary-brownPod900'
          />
        </div>
        {/* Cards */}
        <AvailableConsultants date='2025-01-30' hour='13:00' token={token} />
        {/* Back Button */}
        <div className='flex flex-row justify-start h-1/6'>
          <SquareLink
            text='Regresar'
            color='bg-primary-brownPod600'
            width='w-1/6'
            textColor='text-contrast-slateGray50'
            onClick={goBack}
          />
        </div>
      </div>
    </MainDashboardFrame>
  )
}

export default SessionConsultant
