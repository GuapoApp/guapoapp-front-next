import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import FormSquareButton from '@/components/forms/FormSquareButton'
import FileInput from '@/components/forms/FileInput'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'

import { useForm } from 'react-hook-form'
import { useUserContext } from '../../context/UserContext'
import Image from 'next/image'

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

    try {
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

      if (response.status === 201) {
        console.log('JSON: ', json)
        alert('Usuario registrado correctamente')
        return
      }

      if (response.status === 400) {
        alert(`${json.error.error_message.message}`)
        return
      }
    } catch (error) {
      console.log('Error when registering consultant:', error)
    }
  }

  const displayLoginError = (message) => {
    return <Paragraph text={message} textColor='text-red-600' />
  }

  return (
    <main className=''>
    
    <MainDashboardFrame footerColor='bg-primary-brownPod600'>
      {/*Seccion Principal */}
      
      <div className='w-[70%] h-[70%] shadow-2xl items-center justify-center '>
        <div className='h-1/4 lg:flex hidden justify-center items-center  sm:hidden'>
          <Image
            className=''
            src='/assets/logos/logo-naranja.png'
            width={160}
            height={100}
            alt=''
          />
        </div>

        {/*Formulario de registro*/}
        <form
          className='w-full h-3/4 bg-primary-brownPod900 lg:flex flex-row  px-12 py-10'
          onSubmit={handleSubmit(onSubmit)}
        >
         
         {/*Foto de perfil */}
          <div className='lg:w-1/3 h-full flex flex-col items-center justify-center sm:items-center 
                          sm:justify-center gap-5'>
            <Image
              className='lg:ml-0 '
              alt=''
              src='/assets/images/profile-pic.jpg'
              width={220}
              height={220}
            />
            <div className='flex flex-col gap-4 '>
              <Header6
                textColor='text-contrast-slateGray50'
                text='Sube una foto de perfil'
                textAlign='text-center'
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

     {/*  columna de bievenida*/}

          <div className='w-1/3 h-full flex flex-col px-20 justify-center gap-4'>
            <div className='flex flex-col gap-3'>
              <Header4
                text='BIENVENIDO'
                textColor='text-contrast-slateGray50'
                textAlign='text-center'
              />
              <Header5
                text='Completar datos,'
                textColor='text-contrast-slateGray50'
                textAlign='text-center'
              />

            </div>
            <div className='flex flex-col gap-3 '>
              <label htmlFor='cv' className='w-full'>
                <Header6
                  textColor='text-contrast-slateGray50'
                  text='Ajunta CV'
                  textAlign='text-center'
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
                  textAlign='text-center'
                />
              </label>
              <input
                type='date'
                className={`w-full p-3 text-contrast-slateGray500
                    sm:w-44 rounded-md text-xl bg-contrast-slateGray300`}
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

          {/*Experiencia profesional*/}
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
              className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl 
                sm:w-44 bg-contrast-slateGray300`}
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
                text='Red Social'
                textColor='text-contrast-slateGray50'
                textAlign='text-center'
              />
            </label>
            <input
              type='text'
              name='socialMedia'
              id='socialMedia'
              placeholder='Escribe el link'
              className={`w-full p-3 text-contrast-slateGray500 rounded-md 
                text-xl bg-contrast-slateGray300 sm:w-44 mr-10`}
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
      
    </MainDashboardFrame>
    </main>
  )
}

export default ConsultantRegister
