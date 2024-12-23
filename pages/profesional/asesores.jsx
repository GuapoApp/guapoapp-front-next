import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import CurvedBackground from '@/components/CurvedBackground'
import Welcome from '@/components/dashboards/Welcome'
import ProfilePicture from '@/components/dashboards/ProfilePicture'
import Calendar from '@/components/dashboards/Calendar'
import HourPicker from '@/components/dashboards/HourPicker'
import SessionCard from '@/components/dashboards/SessionCard'
import FormSquareButton from '@/components/forms/FormSquareButton'
import SquareButton from '@/components/SquareButton'

import DashboardMenu from '@/components/dashboards/DashboardMenu'

import { useEffect, useState } from 'react'

import { jwtDecode } from 'jwt-decode'

import Image from 'next/image'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

const ProfessionalConsultants = () => {
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
    <main className='box-content bg-contrast-slateGray50 min-h-screen w-full flex flex-col'>
      {/* Navbar */}
      <div className='bg-primary-brownPod800 w-full flex flex-row justify-center'>
        <Image
          className='p-3'
          src='/assets/logos/logo-blanco.png'
          alt='GuapoApp Logo'
          width={110}
          height={110}
          priority
        />
      </div>
      {/* Principal */}
      <section className='flex flex-row items-center justify-center'>
        {/* Sección Izquierda || Menú */}
        <div className='flex flex-row h-full w-1/4'>
          <DashboardMenu role={role} />
        </div>
        {/* Sección Derecha || Asesores */}
        <div className='flex flex-col w-3/4 gap-5'>
          {/* Header */}
          <div className='flex flex-row w-full justify-end gap-10'>
            {/* Título */}
            <div className='flex flex-col gap-2'>
              <Header4
                text='MIS ASESORES'
                textColor='text-primary-brownPod800'
              />
            </div>
            {/* Cuadro Café*/}
            <div className='bg-primary-brownPod700 w-1/5'></div>
          </div>
          {/* Asesores */}
          <div>
            {/* Card 1 */}
            <div></div>
            {/* Card 2 */}
            <div></div>
            {/* Card 3 */}
            <div></div>
            {/* Card 4 */}
            <div></div>
          </div>
        </div>
      </section>
      {/* Curved Background */}
      <div className='h-24 absolute -bottom-0 w-full z-0'>
        <CurvedBackground color='bg-primary-brownPod700' />
      </div>
    </main>
  )
}

export default ProfessionalConsultants
