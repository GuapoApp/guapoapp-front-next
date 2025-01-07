import Header4 from '@/components/Header4'
import Welcome from '@/components/dashboards/Welcome'
import ProfilePicture from '@/components/dashboards/ProfilePicture'
import Calendar from '@/components/dashboards/Calendar'
import HourPicker from '@/components/dashboards/HourPicker'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'
import NextSessions from '@/components/dashboards/NextSessions'

import { useUserContext } from '../../context/UserContext'

import { jwtDecode } from 'jwt-decode'
import { useEffect, useState } from 'react'

import Link from 'next/link'

const ProfessionalDashboard = () => {
  const [userName, setUserName] = useState('')
  // const [role, setRole] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  // const [userId, setUserId] = useState('')
  // const [token, setToken] = useState('')

  const {
    token,
    setToken,
    userId,
    setUserId,
    professionalId,
    setProfessionalId,
    consultantId,
    setConsultantId,
    role,
    setRole
  } = useUserContext()

  useEffect(() => {
    setToken(localStorage.token)
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setUserName(decoded.Name)
      setRole(decoded.Role)
      setProfilePicture(decoded.Profile_Picture)
      setUserId(decoded._id)
      setProfessionalId(decoded.Professional_Id)
    }
  }, [])

  return (
    <MainDashboardFrame footerColor='bg-primary-brownPod600'>
      {/* Menu y sección izquierda */}
      <div className='flex flex-col gap-10 w-2/6 align-middle justify-start'>
        {/**
         * TODO: Add profilePicture as Dynamic prop
         */}
        <ProfilePicture role={role} profilePicture={profilePicture} />
        <Welcome userName={userName} />
      </div>
      <div className='flex w-4/6 flex-col gap-1 pt-3 pl-28'>
        {/*Header Agenda tu cita*/}
        <Header4 text='AGENDA TU CITA' textColor='text-primary-brownPod900' />
        {/*Agenda*/}
        <div className='flex flex-row gap-5'>
          {/*Calendar*/}
          <div className=''>
            <Calendar />
          </div>
          {/*Schedule*/}
          <div className='flex flex-col gap-5'>
            <HourPicker />
            <div
              className={`bg-primary-brownPod600 text-contrast-slateGray50 font-bold rounded-full text-center p-2 text-xl`}
            >
              <Link href='/'>Agendar</Link>
            </div>
          </div>
        </div>
        {/*Proximas citas*/}
        <NextSessions userId={userId} token={token} />
      </div>
    </MainDashboardFrame>
  )
}
export default ProfessionalDashboard
