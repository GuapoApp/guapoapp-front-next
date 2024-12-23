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
          <div className='flex flex-row gap-7 bg-primary-brownPod600 p-5 justify-center px-20 py-10'>
            {/* Experiencia */}
            <div className='flex flex-col gap-2'>
              <Header1
                text='12'
                textColor='text-contrast-slateGray50'
                textAlign='text-center'
              />
              <Header6
                text='Años de Experiencia'
                textColor='text-contrast-slateGray50'
                textAlign='text-center'
                textWrap
              />
            </div>
            {/* Line */}
            <div className='h-[90%] w-[2px] bg-contrast-slateGray50'></div>
            {/* Número de Asesorías Realizadas */}
            <div className='flex flex-col gap-2'>
              <Header1
                text='60'
                textColor='text-contrast-slateGray50'
                textAlign='text-center'
              />
              <Header6
                text='Asesorías Realizadas'
                textColor='text-contrast-slateGray50'
                textAlign='text-center'
                textWrap
              />
            </div>
            {/* Line */}
            <div className='h-[90%] w-[2px] bg-contrast-slateGray50'></div>
            {/* Calificación */}
            <div className='flex flex-col gap-2'>
              <Header1
                text='4.5/5'
                textColor='text-contrast-slateGray50'
                textAlign='text-center'
              />
              <Header6
                text='Calificación Promedio'
                textColor='text-contrast-slateGray50'
                textAlign='text-center'
                textWrap
              />
            </div>
          </div>
          {/* Saldo Pendiente de Retiro */}
          <div className='flex flex-col gap-3 bg-contrast-slateGray300 rounded-md p-5 w-2/5'>
            <Header5
              text='Saldo Pendiente de Retiro'
              textColor='text-primary-brownPod900'
              textAlign='text-center'
            />
            <div className='flex flex-row gap-5 justify-center items-center font-bold'>
              <Header6 text='$2,500.00' textColor='text-primary-brownPod900' />
              {/**
               * TODO: Add SquareButton but not as form
               */}
              <FormSquareButton
                color='bg-primary-brownPod500'
                textColor='text-contrast-slateGray50'
                text='Retirar'
                width='w-3/6'
              />
            </div>
          </div>
        </section>
      </div>
      {/* Curved Background */}
      <div className='h-24 absolute -bottom-0 w-full z-0'>
        <CurvedBackground color='bg-primary-brownPod700' />
      </div>
    </main>
  )
}
export default ConsultantDashboard
