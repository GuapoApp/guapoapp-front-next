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
      className={`${cabin.className} bg-contrast-slateGray50 flex items-center justify-center flex-col`}
    >
      {/* Parte central del form del login*/}
      <button className='w-[30%] h-12 mt-12 rounded-2 rounded-md
       bg-primary-brownPod600 mb-12'> 
         <Header5 text="AGENDA TU SESION HOY" textColor="text-contrast-slateGray100"/>
        </button>
        <div className='flex flex-row w-[70%] h-[40%] shadow-2xl items-center justify-center'>
              
          <form
            className='w-1/2 h-full flex flex-col  p-10 gap-5'
            onSubmit={handleSubmit(onSubmit)}
          >

            <div className='w-full flex flex-col gap-4 '>
              <label className='w-full' htmlFor='name'>
                <Header6 text='Nombre Completo' />
              </label>
              <input
                className={`w-[100%] p-3 text-contrast-slateGray500 rounded-md
                     text-xl bg-contrast-slateGray300`}
                placeholder='Escribe tu nombre aquí'
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
            
          </form>
        </div>
    </main>
  )
}

export default Register
