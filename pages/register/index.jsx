import CurvedBackground from '@/components/CurvedBackground'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
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

  const router = useRouter()

  const onSubmit = async (data) => {
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_GUAPOAPP_URI}user/login`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       Email: data.email,
    //       Password: data.password
    //     })
    //   }
    // )
    // const json = await response.json()
    // if (json.data?.token) {
    //   localStorage.setItem('token', json.data.token)
    //   const decoded = jwtDecode(json.data.token)
    //   const role = decoded.Role
    //   if (role === 'ADMIN') {
    //     router.push('/admin')
    //     return
    //   }
    //   if (role === 'CONSULTANT') {
    //     router.push('/asesor')
    //     return
    //   }
    //   if (role === 'PROFESSIONAL') {
    //     router.push('/profesional')
    //     return
    //   }
    // }

    console.log('Data', data)

    if (data.role === 'Consultant') {
      router.push('/register/consultant')
    } else {
      router.push('/register/professional')
    }
  }

  return (
    <main
      className={`${cabin.className} bg-contrast-slateGray50 flex flex-col min-h-screen w-full`}
    >
      {/* Navbar */}
      <div className='bg-primary-brownPod800 w-full flex flex-row justify-center h-24'></div>
      {/* Parte central del form del login*/}
      <section className='flex flex-row justify-center items-center h-[820px] m-auto w-full'>
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
            className='w-1/2 h-full flex flex-col justify-center px-24 gap-5'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Header4 text='REGÍSTRATE,' textColor='text-primary-brownPod800' />
            <div className='flex flex-row gap-5'>
              <input
                className={`form-radio text-primary-brownPod950`}
                type='radio'
                name='role'
                id='role'
                value='Consultant'
                {...register('role')}
              />
              <label className='w-full' htmlFor='Consultant'>
                <Header6 text='Voy a dar Asesorías' />
              </label>
              <input
                className={``}
                type='radio'
                name='role'
                id='role'
                value='Professional'
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
                {...register('name')}
              />
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
                {...register('email')}
              />
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
                {...register('password')}
              />
            </div>
            <div>
              <button
                className={`bg-primary-brownPod600 px-2 py-3 rounded-md text-xl text-contrast-slateGray50 w-2/4 font-semibold shadow-2xl`}
              >
                Crea tu cuenta
              </button>
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
