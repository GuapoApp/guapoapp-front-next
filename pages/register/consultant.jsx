import CurvedBackground from '@/components/CurvedBackground'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import FormSquareInput from '@/components/forms/FormSquareInput'
import FileInput from '@/components/forms/FileInput'

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
      <section className='flex flex-row justify-center items-center m-auto w-full'>
        <div className='flex flex-col w-[70%] h-[70%] shadow-2xl'>
          <div className='h-1/4 flex justify-center'>
            <Image
              src='/assets/logos/logo-naranja.png'
              width={160}
              height={100}
              alt=''
            />
          </div>
          <form className='w-full h-3/4 bg-primary-brownPod900 flex flex-row px-12 py-10'>
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
                <FileInput
                  accept='image/*'
                  color='bg-primary-brownPod600'
                  textColor='text-contrast-slateGray50'
                  id='profilePicture'
                  name='profilePicture'
                  text='Selecciona un archivo'
                />
              </div>
            </div>
            <div className='w-1/3 h-full flex flex-col px-20 justify-center gap-4'>
              <div className='flex flex-col gap-3'>
                <Header4
                  text='BIENVENIDO'
                  textColor='text-contrast-slateGray50'
                />
                <Header5
                  text='Completa tus datos,'
                  textColor='text-contrast-slateGray50'
                />
              </div>
              <div className='flex flex-col gap-3'>
                <Header6
                  textColor='text-contrast-slateGray50'
                  text='Sube tu CV'
                />
                <FileInput
                  accept='.pdf'
                  color='bg-primary-brownPod600'
                  textColor='text-contrast-slateGray50'
                  id='cv'
                  name='cv'
                  text='Selecciona un archivo'
                />
              </div>
              <div className='flex flex-col gap-3'>
                <Header6
                  textColor='text-contrast-slateGray50'
                  text='Fecha de Nacimiento'
                />
                <input
                  type='date'
                  className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                />
              </div>
            </div>
            <div className='w-1/3 h-full flex flex-col px-20 justify-center gap-4'>
              <Header6
                text='Experiencia profesional'
                textColor='text-contrast-slateGray50'
              />
              <textarea
                name='professionalExperiencia'
                id='professionalExperience'
                placeholder='Escribe aquí tu experiencia'
                className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                rows='5'
                maxlength='200'
              ></textarea>
              <Header6
                text='Agrega al menos una red social profesional'
                textColor='text-contrast-slateGray50'
              />
              <input
                type='text'
                name='socialMedia'
                id='socialMedia'
                placeholder='Escribe el link'
                className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
              />
              <div>
                <FormSquareInput
                  text='Finalizar'
                  color='bg-primary-brownPod600'
                  textColor='text-contrast-slateGray50'
                  width='w-2/4'
                />
              </div>
            </div>
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
