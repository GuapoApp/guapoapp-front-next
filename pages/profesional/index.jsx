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

import { jwtDecode } from 'jwt-decode'

import Image from 'next/image'
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
    <main className='box-content bg-contrast-slateGray50 min-h-screen w-full flex flex-col'>
      {/* Navbar */}
      <div className='bg-primary-brownPod800 w-full flex flex-row justify-center'>
        <Image
          className='p-3'
          src='/logo-elegance-mix.svg'
          alt='GuapoApp Logo'
          width={110}
          height={110}
          priority
        />
      </div>
      {/* Principal */}
      <div className='flex flex-row w-full h-full gap-10'>
        {/* Menu y sección izquierda */}
        <section className='flex flex-col align-middle justify-start'>
          {/**
           * TODO: Add profilePicture as Dynamic prop
           */}
          <ProfilePicture
            role={role}
            profilePicture='/assets/images/stock-image-1.jpeg'
          />

          <Welcome userName={userName} />
        </section>
        {/* Agenda y proximas citas sección izquierda */}
        <section className='flex flex-col p-5'>
          {/*Header Agenda tu cita*/}
          <Header4 text='AGENDA TU CITA' textColor='primary-brownPod950' />
          {/*Agenda*/}
          <div>
            {/*Calendar*/}
            <div className=''></div>
            {/*Schedule*/}
            <div></div>
          </div>
          {/*Proximas citas*/}
          <div></div>
          {/*Footer Proximas citas*/}
          <div></div>
        </section>
      </div>

      <div className='h-24 absolute -bottom-0 w-full'>
        <CurvedBackground />
      </div>
    </main>
  )
}
export default ProfessionalDashboard
