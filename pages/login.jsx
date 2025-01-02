import Header4 from '@/components/Header4'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import FormSquareButton from '@/components/forms/FormSquareButton'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'

import { useForm } from 'react-hook-form'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_GUAPOAPP_URI}user/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            Email: data.email,
            Password: data.password
          })
        }
      )

      const json = await response.json()

      if (json.data?.token) {
        localStorage.setItem('token', json.data.token)

        const decoded = jwtDecode(json.data.token)
        const role = decoded.Role

        if (role === 'ADMIN') {
          router.push('/admin')
          return
        }
        if (role === 'CONSULTANT') {
          router.push('/asesor')
          return
        }
        if (role === 'PROFESSIONAL') {
          router.push('/profesional')
          return
        }
      }

      setError('root', { message: json.status })
    } catch (error) {
      console.log('Error when logging in:', error)
    }
  }

  const displayLoginError = (message) => {
    return <Paragraph text={message} textColor='text-red-600' />
  }

  return (
    <MainDashboardFrame footerColor='bg-primary-brownPod600'>
      {/* Parte central del form del login*/}
      <div className='flex flex-row w-[70%] h-[70%] shadow-2xl'>
        {/* Logo */}
        <div className='w-1/2 bg-[url("/assets/images/background-1.jpg")] bg-cover flex justify-center items-start'>
          <Image
            className='pt-10'
            src='/assets/logos/logo-blanco.png'
            alt=''
            height={200}
            width={200}
          ></Image>
        </div>
        {/* Form */}
        <form
          className='w-1/2 h-full flex flex-col justify-center px-24 gap-5 py-10'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Header4 text='BIENVENIDO,' textColor='text-primary-brownPod800' />
          <div className='w-full flex flex-col gap-4 '>
            <label className='w-full' htmlFor='email'>
              <Header6 text='Email' />
            </label>
            <input
              className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
              placeholder='Escribe tu email'
              type='email'
              name='email'
              id='email'
              {...register('email', {
                required: { value: true, message: 'El email es requerido' }
              })}
            />
            {errors?.email?.message && displayLoginError(errors.email.message)}
          </div>
          <div className='w-full flex flex-col gap-4'>
            <label className='w-full' htmlFor='password'>
              <Header6 text='Password' />
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
            <div className='flex flex-row justify-between items-center'>
              {errors?.root && displayLoginError(errors.root.message)}
              <Link href='/'>
                <Paragraph
                  text='¿Olvidaste tu contraseña?'
                  textAlign='text-right'
                />
              </Link>
            </div>
          </div>
          <div>
            <FormSquareButton
              text='Inicia Sesión'
              color='bg-primary-brownPod600'
              textColor='text-contrast-slateGray50'
              width='w-2/4'
            />
          </div>
          {/* Sección: No tienes cuenta */}
          <div className='flex flex-row justify-end items-center gap-4'>
            <Paragraph text='¿No tienes cuenta?' />
            <Link href='/register' className='border-2 rounded-xl px-7 py-4'>
              <Paragraph text='Regístrate' />
            </Link>
          </div>
        </form>
      </div>
    </MainDashboardFrame>
  )
}

export default Login
