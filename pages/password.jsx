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
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'
import DashboardNavbar from '@/components/dashboards/DashboardNavbar'

import Link from 'next/link'
import Image from 'next/image'

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { jwtDecode } from 'jwt-decode'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

const Password = () => {
  const [userEmail, setUserEmail] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setUserEmail(decoded.Email)
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

  const onSubmit = () => {
    console.log('Password')
  }

  const displayLoginError = (message) => {
    return <Paragraph text={message} textColor='text-red-600' />
  }

  const cancel = (e) => {
    e.preventDefault()

    if (role === 'CONSULTANT') {
      router.push('/asesor')
    } else {
      router.push('/profesional')
    }
  }

  return (
    <MainDashboardFrame>
      {/* Parte central del form del login*/}
      <section className='flex flex-row justify-center items-center m-auto w-full'>
        <div className='flex flex-row w-[70%] h-[70%] shadow-2xl'>
          {/* Logo */}
          {/* Logo */}
          <div className='w-1/2 bg-[url("/assets/images/background-2.jpg")] bg-cover flex justify-center items-end'>
            <Image
              className='pb-10'
              src='/assets/logos/logo-blanco.png'
              alt=''
              height={200}
              width={200}
            ></Image>
          </div>
          {/* Form */}
          <form
            className='w-1/2 h-full flex flex-col justify-center px-24 gap-8 py-10'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Header4
              text='ACTUALIZA TU CONTRASEÑA'
              textColor='text-primary-brownPod800'
            />
            <div className='w-full flex flex-col gap-5 '>
              <label className='w-full' htmlFor='password'>
                <Header6 text='Nueva Contraseña' />
              </label>
              <input
                className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                placeholder='Escribe tu contraseña'
                type='password'
                name='password'
                id='password'
                {...register('password', {
                  required: { value: true, message: 'El password es requerido' }
                })}
              />
              {errors?.password?.message &&
                displayLoginError(errors.password.message)}
            </div>
            <div className='w-full flex flex-col gap-4'>
              <label className='w-full' htmlFor='updatedPassword'>
                <Header6 text='Confirmar Contraseña' />
              </label>
              <input
                className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                placeholder='Escribe tu contraseña'
                type='updatedPassword'
                name='updatedPassword'
                id='updatedPassword'
                {...register('updatedPassword', {
                  required: { value: true, message: 'Confirme su contraseña' }
                })}
              />
              {errors?.updatedPassword?.message &&
                displayLoginError(errors.updatedPassword.message)}
            </div>
            <div className='flex flex-col gap-5'>
              <FormSquareButton
                text='Aceptar'
                color='bg-primary-brownPod600'
                textColor='text-contrast-slateGray50'
                width='w-2/4'
              />
              <SquareLink
                text='Cancelar'
                color='bg-primary-brownPod600'
                textColor='text-contrast-slateGray50'
                width='w-2/4'
                onClick={cancel}
              />
            </div>
          </form>
        </div>
      </section>
      {/* Curved Background */}
      <div className='h-24 w-full'>
        <CurvedBackground color='bg-primary-brownPod700' />
      </div>
    </MainDashboardFrame>
  )
}
export default Password
