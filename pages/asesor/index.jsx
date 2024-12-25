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
import SquareLink from '@/components/SquareLink'
import ConsultantBanner from '@/components/dashboards/ConsultantBanner'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'
import DashboardNavbar from '@/components/dashboards/DashboardNavbar'

import { jwtDecode } from 'jwt-decode'

import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'

import { Cabin } from 'next/font/google'
import { Form } from 'react-hook-form'

const cabin = Cabin({ subsets: ['latin'] })

const ConsultantDashboard = () => {
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setUserName(decoded.Name)
      setRole(decoded.Role)
    }
  }, [])

  const withdraw = (e) => {
    e.preventDefault()
    console.log('Withdraw')
  }

  return (
    <MainDashboardFrame>
      {/* Principal */}
      <div className='flex flex-row w-full gap-10 justify-center z-10 px-10'>
        {/* Menu y sección izquierda */}
        <section className='flex flex-col align-middle justify-start'>
          {/**
           * TODO: Add profilePicture as Dynamic prop
           */}
          <ProfilePicture
            role={role}
            profilePicture='/assets/images/stock-image-9.jpg'
          />
          <Welcome userName={userName} />
        </section>
        {/* Sección izquierda */}
        <section className='flex flex-col p-5 gap-8'>
          {/* Banner superior */}
          <div>
            <Header3
              text='Asesoría de imágen para profesionistas modernos'
              textColor='text-primary-brownPod900'
            />
          </div>
          {/* Próximas sesiones */}
          <div className='flex flex-col gap-5'>
            <Header6
              text='Próximas sesiones'
              textColor='text-primary-brownPod900'
            />
            <div className='flex flex-col gap-3 p-2'>
              <SessionCard
                dayName='LUNES'
                hour='9:00 AM a 10:00 AM'
                user='JORGE GÓMEZ'
                sessionName='Asesoría para Boda'
                day='10/01'
              />
              <SessionCard
                dayName='LUNES'
                hour='10:00 AM a 11:00 AM'
                user='JESÚS SOTO'
                sessionName='Asesoría Integral'
                day='10/01'
              />
            </div>
          </div>
          {/* Banner Experiencia y Calificación */}
          <ConsultantBanner
            experienceYears='12'
            sessionsCount='50'
            averageRating='4.5/5'
          />
          {/* Saldo Pendiente de Retiro */}
          <div className='flex flex-col gap-3 bg-contrast-slateGray300 rounded-md p-5 w-2/5'>
            <Header5
              text='Saldo Pendiente de Retiro'
              textColor='text-primary-brownPod900'
              textAlign='text-center'
            />
            <div className='flex flex-row gap-5 justify-center items-center font-bold'>
              <Header6 text='$2,500.00' textColor='text-primary-brownPod900' />

              <SquareLink
                color='bg-primary-brownPod500'
                textColor='text-contrast-slateGray50'
                text='Retirar'
                width='w-3/6'
                onClick={withdraw}
              />
            </div>
          </div>
        </section>
      </div>
      {/* Curved Background */}
      <div className='h-24 absolute -bottom-0 w-full z-0'>
        <CurvedBackground color='bg-primary-brownPod700' />
      </div>
    </MainDashboardFrame>
  )
}
export default ConsultantDashboard
