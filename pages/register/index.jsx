import CurvedBackground from '@/components/CurvedBackground'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import FormSquareButton from '@/components/forms/FormSquareButton'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useUserContext } from '../../context/UserContext'
import Image from 'next/image'
import Link from 'next/link'

import { Ubuntu } from 'next/font/google'
import { Cabin } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' })
const cabin = Cabin({ subsets: ['latin'] })

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  const { user, setUser } = useUserContext()

  const router = useRouter()

  const onSubmit = async (data) => {
    setUser(data)

    console.log('User in Register:', user)

    if (data.role === 'CONSULTANT') {
      router.push('/register/consultant')
    } else {
      router.push('/register/professional')
    }
  }

  const displayLoginError = (message) => {
    return <Paragraph text={message} textColor='text-red-600' />
  }

  return (
    <main
      className={`${cabin.className} bg-contrast-slateGray50 flex flex-col min-h-screen w-full`}
    >
      {/* Navbar */}
      <div className='bg-primary-brownPod800 w-full flex flex-row justify-center h-24'></div>
      {/* Parte central del form del login*/}
      <section className='flex flex-row justify-center items-center m-auto w-full'>
        <div className='flex flex-row w-[70%] h-[70%] shadow-2xl'>
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
            className='w-1/2 h-full flex flex-col justify-center px-24 gap-5 py-10'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Header4 text='REGÍSTRATE,' textColor='text-primary-brownPod800' />
            <div className='flex flex-row gap-5'>
              <input
                className={``}
                type='radio'
                name='role'
                // id='role'
                value='CONSULTANT'
                {...register('role')}
                defaultChecked
              />
              <label className='w-full' htmlFor='Consultant'>
                <Header6 text='Voy a dar Asesorías' />
              </label>
              <input
                className={``}
                type='radio'
                name='role'
                // id='role'
                value='PROFESSIONAL'
                {...register('role')}
              />
              <label className='w-full' htmlFor='Profesional'>
                <Header6 text='Quiero asesorarme' />
              </label>
            </div>
            <div className='w-full flex flex-col gap-4 '>
              <label className='w-full' htmlFor='name'>
                <Header6 text='Nombre Completo' />
              </label>
              <input
                className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                placeholder='Escribe tu nombre'
                type='text'
                name='name'
                id='name'
                {...register('name', {
                  required: { value: true, message: 'El nombre es requerido' }
                })}
              />
              {errors?.name?.message && displayLoginError(errors.name.message)}
            </div>
            <div className='w-full flex flex-col gap-4'>
              <label className='w-full' htmlFor='email'>
                <Header6 text='Escribe tu email' />
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
              {errors?.email?.message &&
                displayLoginError(errors.email.message)}
            </div>
            <div className='w-full flex flex-col gap-4 '>
              <label className='w-full' htmlFor='password'>
                <Header6 text='Contraseña' />
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
            <div>
              <FormSquareButton
                text='Crea tu cuenta'
                color='bg-primary-brownPod600'
                textColor='text-contrast-slateGray50'
                width='w-2/4'
              />
            </div>
          </form>
        </div>
      </section>
      {/* Curved Background */}
      <div className='h-24 w-full'>
        <CurvedBackground color='bg-primary-brownPod600' />
      </div>
    </main>
  )
}

export default Register
