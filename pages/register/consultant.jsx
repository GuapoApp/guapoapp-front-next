import CurvedBackground from '@/components/CurvedBackground'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import FormSquareButton from '@/components/forms/FormSquareButton'
import FileInput from '@/components/forms/FileInput'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'
import DashboardNavbar from '@/components/dashboards/DashboardNavbar'

import { useForm } from 'react-hook-form'
import { useUserContext } from '../../context/UserContext'
import Image from 'next/image'

import { Ubuntu } from 'next/font/google'
import { Cabin } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '300' })
const cabin = Cabin({ subsets: ['latin'] })

const ConsultantRegister = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  const { user, setUser } = useUserContext()

  const onSubmit = async (data) => {
    console.log('Data', data)
    console.log('User in Register:', user)

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_GUAPOAPP_URI}consultant`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Email: user.email,
          Password: user.password,
          Name: user.name,
          Role: user.role,
          Curriculum_File: '/profilePicture',
          Profile_Picture: '/profilePicture',
          Birth_Date: data.birthDate,
          Experience: data.professionalExperience,
          Social_Media: data.socialMedia
        })
      }
    )
    const json = await response.json()

    console.log('Json: ', json)

    alert('Usuario registrado correctamente')
  }

  const displayLoginError = (message) => {
    return <Paragraph text={message} textColor='text-red-600' />
  }

  return (
    <MainDashboardFrame>
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
          <form
            className='w-full h-3/4 bg-primary-brownPod900 flex flex-row px-12 py-10'
            onSubmit={handleSubmit(onSubmit)}
          >
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
                <label htmlFor='cv' className='w-full'>
                  <Header6
                    textColor='text-contrast-slateGray50'
                    text='Sube tu CV'
                  />
                </label>
                <FileInput
                  accept='.pdf'
                  color='bg-primary-brownPod600'
                  textColor='text-contrast-slateGray50'
                  id='cv'
                  name='cv'
                  text='Selecciona un archivo'
                  required
                  message='El CV es requerido'
                />
              </div>
              <div className='flex flex-col gap-3'>
                <label htmlFor='birthDate'>
                  <Header6
                    textColor='text-contrast-slateGray50'
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
                {errors?.birthDate?.message &&
                  displayLoginError(errors.birthDate.message)}
              </div>
            </div>
            <div className='w-1/3 h-full flex flex-col px-20 justify-center gap-4'>
              <label htmlFor='professionalExperience'>
                <Header6
                  text='Experiencia profesional'
                  textColor='text-contrast-slateGray50'
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
              <label htmlFor='socialMedia'>
                <Header6
                  text='Agrega al menos una red social profesional'
                  textColor='text-contrast-slateGray50'
                />
              </label>
              <input
                type='text'
                name='socialMedia'
                id='socialMedia'
                placeholder='Escribe el link'
                className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                {...register('socialMedia', {
                  required: true,
                  message: 'La red social es requerida'
                })}
              />
              {errors?.socialMedia?.message &&
                displayLoginError(errors.socialMedia.message)}
              <div>
                <FormSquareButton
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
    </MainDashboardFrame>
  )
}

export default ConsultantRegister
