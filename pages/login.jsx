import { useForm } from 'react-hook-form'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { Ubuntu } from 'next/font/google'
import { Cabin } from 'next/font/google'

import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Paragraph from '@/components/Paragraph'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' })
const cabin = Cabin({ subsets: ['latin'] })

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  const router = useRouter()

  const onSubmit = async (data) => {
    const response = await fetch(`http://localhost:3002/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Email: data.email,
        Password: data.password
      })
    })

    const json = await response.json()

    console.log(response.status)

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
  }

  return (
    <main
      className={`${cabin.className} min-h-screen bg-[#FEAA00] text-[#F7F9FC] flex flex-col items-center gap-16`}
    >
      <div className='flex flex-row justify-between w-full max-w-[80%] m-1'>
        <div className='flex flex-row justify-between items-center gap-5'>
          <Image
            className=''
            src='/logo-elegance-mix.svg'
            alt='GuapoApp Logo'
            width={50}
            height={50}
            priority
          />
          <h6>Consultoria de Imagen</h6>
        </div>
        <div className='flex items-center'>
          <ul className='flex flex-row justify-between gap-10'>
            <li>Inicio</li>
            <li>Beneficios</li>
            <li>Acerca de</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-row w-full max-w-[80%] gap-6'>
        <div className='flex flex-row items-center justify-center w-full bg-[#E28000]'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-5 justify-center size-4/5'
          >
            <Header5 text='¡BIENVENIDO!' />
            <Header4 text='Inicia Sesión' />

            <label className='text-2xl' htmlFor='email'>
              Email
            </label>
            <input
              className={`text-[#3E4B5E] p-2 rounded-md text-2xl`}
              placeholder='Tu correo electrónico'
              type='email'
              name='email'
              id='email'
              {...register('email')}
            />
            <label className='text-2xl' htmlFor='password'>
              Password
            </label>
            <input
              className={`text-[#3E4B5E] p-2 rounded-md text-2xl`}
              placeholder='Password'
              type='password'
              name='password'
              id='password'
              {...register('password')}
            />
            <button className={`bg-[#974508] px-2 py-3 rounded-md text-2xl`}>
              Inicia Sesión
            </button>
          </form>
        </div>
        <div className='w-full'>
          <Image
            className='w-full h-full'
            src='/assets/consulting.webp'
            alt='GuapoApp Logo'
            width={503}
            height={433}
            priority
          />
        </div>
      </div>
    </main>
  )
}

export default Login
