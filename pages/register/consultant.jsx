import CurvedBackground from '@/components/CurvedBackground'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'

import Image from 'next/image'

import { Ubuntu } from 'next/font/google'
import { Cabin } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' })
const cabin = Cabin({ subsets: ['latin'] })

const ConsultantRegister = () => {
  return (
    <main
      className={`${cabin.className} bg-contrast-slateGray50 flex flex-col min-h-screen w-full`}
    >
      {/* Navbar */}
      <div className='bg-primary-brownPod800 w-full flex flex-row justify-center h-24'></div>
      {/*Seccion Principal */}
      <section className='flex flex-row justify-center items-center h-[820px] m-auto w-full'>
        <div className='flex flex-col w-[70%] h-[70%] shadow-2xl'>
          <div className='h-1/4 flex justify-center'>
            <Image
              src='/assets/logos/logo-naranja.png'
              width={160}
              height={100}
              alt=''
            />
          </div>
          <form className='w-full h-3/4 bg-primary-brownPod900 flex flex-row'>
            <div className='w-1/3 h-full flex flex-col items-center justify-center gap-5'>
              <Image
                alt=''
                src='/assets/images/profile-pic.jpg'
                width={220}
                height={220}
              />
              <div className='flex flex-col gap-4'>
                <Header6
                  textColor='text-contrast-slateGray50'
                  text='Sube una foto de perfil'
                />
                <input
                  type='file'
                  accept='image/*'
                  className='bg-primary-brownPod600'
                />
              </div>
            </div>
            <div className='w-1/3 h-full flex flex-col px-20 justify-center gap-4'>
              <div className='flex flex-col gap-3'>
                <Header4
                  text='BIENVENIDO'
                  textColor='text-contrast-slateGray50'
                />
                <Header4
                  text='Completa tus datos,'
                  textColor='text-contrast-slateGray50'
                />
              </div>
              <div className='flex flex-col gap-3'>
                <Header6
                  textColor='text-contrast-slateGray50'
                  text='Sube tu CV'
                />
                <input
                  type='file'
                  accept='image/*'
                  className='bg-primary-brownPod600'
                />
              </div>
              <div className='flex flex-col gap-3'>
                <Header6
                  textColor='text-contrast-slateGray50'
                  text='Fecha de Nacimiento'
                />
                <input type='date' />
              </div>
            </div>
            <div className='w-1/3 h-full flex flex-col'></div>
          </form>
        </div>
      </section>
      {/* Footer curveado */}
      <div className='h-24 w-full'>
        <CurvedBackground color='bg-primary-brownPod600' />
      </div>
    </main>
  )
}

export default ConsultantRegister
