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

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

import { jwtDecode } from 'jwt-decode'

import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

const ProfessionalProfile = () => {
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setUserName(decoded.Name)
      setRole(decoded.Role)
    }
  }, [])

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  const router = useRouter()

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
      <div className='flex flex-row w-full gap-14 justify-center z-10'>
        {/* Menu y sección izquierda */}
        <section className='flex flex-col align-middle justify-start'>
          {/**
           * TODO: Add profilePicture as Dynamic prop
           */}
          <ProfilePicture
            role={role}
            profilePicture='/assets/images/stock-image-1.jpeg'
          />
        </section>
        {/* Sección derecha */}
        <section className='flex flex-col gap-28 w-2/5 py-5'>
          {/* Header */}
          <div className='flex flex-row w-full justify-end gap-10'>
            {/* Nombre */}
            <div className='flex flex-col gap-2 '>
              <Header4 text='MI PERFIL' textColor='text-primary-brownPod800' />
              <Header5
                text={`${userName},`}
                textColor='text-primary-brownPod800'
              />
            </div>
            {/* Cuadro Café*/}
            <div className='bg-primary-brownPod700 w-1/5'></div>
          </div>
          {/* Profile Form */}
          <div>
            <form
              className='flex flex-col w-3/5 gap-5'
              onSubmit={console.log('Form de Profile Update')}
            >
              <div className='flex flex-col gap-3'>
                <label htmlFor='birthDate'>
                  <Header6
                    textColor='text-contrast-slateGray700'
                    text='Fecha de Nacimiento'
                  />
                </label>
                <input
                  type='date'
                  className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                  {...register('birthDate', {
                    required: {
                      value: true,
                      message: 'La fecha de nacimiento es requerida'
                    }
                  })}
                  id='birthDate'
                  name='birthDate'
                />
                {/* {errors?.birthDate?.message &&
                  displayLoginError(errors.birthDate.message)} */}
              </div>
              <div className=' flex flex-col gap-3'>
                <label htmlFor='professionalExperience'>
                  <Header6
                    text='Experiencia profesional'
                    textColor='text-contrast-slateGray700'
                  />
                </label>
                <textarea
                  name='professionalExperiencia'
                  id='professionalExperience'
                  placeholder='Escribe aquí tu experiencia'
                  className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                  rows='5'
                  maxLength='200'
                  {...register('professionalExperience', {
                    required: {
                      value: true,
                      message: 'La experiencia profesional es requerida'
                    }
                  })}
                ></textarea>
                {/* Buttons */}
                <div className='flex flex-row justify-around gap-10'>
                  {/* Aceptar || Cancelar */}
                  <div className='flex flex-col w-1/2 gap-5'>
                    <FormSquareButton
                      text='Aceptar'
                      color='bg-primary-brownPod600'
                      textColor='text-contrast-slateGray50'
                    />
                    <FormSquareButton
                      text='Cancelar'
                      color='bg-primary-brownPod600'
                      textColor='text-contrast-slateGray50'
                    />
                  </div>
                  {/* Actualiza Password */}
                  <div className='flex flex-col w-1/2'>
                    <FormSquareButton
                      text='Actualizar Password'
                      color='bg-primary-brownPod600'
                      textColor='text-contrast-slateGray50'
                    />
                  </div>
                </div>
              </div>
            </form>
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

export default ProfessionalProfile
