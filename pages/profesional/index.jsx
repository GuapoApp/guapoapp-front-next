import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Welcome from '@/components/dashboards/Welcome'
import ProfilePicture from '@/components/dashboards/ProfilePicture'
import Calendar from '@/components/dashboards/Calendar'
import HourPicker from '@/components/dashboards/HourPicker'
import SessionCard from '@/components/dashboards/SessionCard'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'

import { jwtDecode } from 'jwt-decode'

import Link from 'next/link'

import { useEffect, useState } from 'react'

const ProfessionalDashboard = () => {
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setUserName(decoded.Name)
      setRole(decoded.Role)
    }
  }, [])

  return (
    <MainDashboardFrame footerColor='bg-primary-brownPod600'>
      {/* Menu y sección izquierda */}
      <div className='flex flex-col gap-10 w-2/6 align-middle justify-start'>
        {/**
         * TODO: Add profilePicture as Dynamic prop
         */}
        <ProfilePicture
          role={role}
          profilePicture='/assets/images/stock-image-9.jpg'
        />
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
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-3 p-2'>
            {/* Card 1 */}
            <SessionCard
              dayName='LUNES'
              hour='9:00 AM a 10:00 AM'
              user='LUIS RAMOS'
              sessionName='Asesoría para Boda'
              day='10/01'
            />
            {/* Card 2 */}
            <SessionCard
              dayName='MARTES'
              hour='1:00 PM a 02:00 PM'
              user='JOSÉ SUÁREZ'
              sessionName='Asesoría Integral'
              day='11/01'
            />
            {/* Card 3 */}
            <SessionCard
              dayName='JUEVES'
              hour='11:00 AM a 12:00 PM'
              user='ERIKA VEGA'
              sessionName='Asesoría para Examen Profesional'
              day='15/01'
            />
          </div>
          {/*Footer Proximas citas*/}
          <div className='p-0'>
            <Header5
              text='Próxima Citas'
              textColor='text-primary-brownPod900'
            />
          </div>
        </div>
      </div>
    </MainDashboardFrame>
  )
}
export default ProfessionalDashboard
