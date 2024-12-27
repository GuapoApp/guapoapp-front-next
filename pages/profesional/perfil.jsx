import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import ProfilePicture from '@/components/dashboards/ProfilePicture'
import FormSquareButton from '@/components/forms/FormSquareButton'
import SquareLink from '@/components/SquareLink'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { jwtDecode } from 'jwt-decode'

const ProfessionalProfile = () => {
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setUserName(decoded.Name)
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

  const goToUpdatePassword = (e) => {
    e.preventDefault()
    router.push('/password')
  }

  const goBack = (e) => {
    e.preventDefault()
    router.push('/profesional')
  }

  return (
    <MainDashboardFrame footerColor='bg-primary-brownPod600'>
      {/* Menu y sección izquierda */}
      <div className='w-2/6'>
        {/**
         * TODO: Add profilePicture as Dynamic prop
         */}
        <ProfilePicture
          role={role}
          profilePicture='/assets/images/stock-image-1.jpeg'
        />
      </div>
      {/* Sección derecha */}
      <div className='w-4/6 flex flex-col gap-28 pl-28'>
        {/* Header */}
        <div className='flex flex-row w-full justify-end gap-10'>
          {/* Nombre */}
          <div className='flex flex-col gap-2 '>
            <Header4 text='MI PERFIL' textColor='text-primary-brownPod800' />
            <Header5
              text={`${userName},`}
              textColor='text-primary-brownPod800'
            />
          </div>
          {/* Cuadro Café*/}
          <div className='bg-primary-brownPod700 w-1/5'></div>
        </div>
        {/* Profile Form */}
        <div>
          <form
            className='flex flex-col w-3/5 gap-5'
            onSubmit={console.log('Form de Profile Update')}
          >
            <div className='flex flex-col gap-3'>
              <label htmlFor='birthDate'>
                <Header6
                  textColor='text-contrast-slateGray700'
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
              {/* {errors?.birthDate?.message &&
                  displayLoginError(errors.birthDate.message)} */}
            </div>
            <div className=' flex flex-col gap-3'>
              <label htmlFor='professionalExperience'>
                <Header6
                  text='Experiencia profesional'
                  textColor='text-contrast-slateGray700'
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
              {/* Buttons */}
              <div className='flex flex-row justify-around gap-10'>
                {/* Aceptar || Cancelar */}
                <div className='flex flex-col w-1/2 gap-5'>
                  <FormSquareButton
                    text='Aceptar'
                    color='bg-primary-brownPod600'
                    textColor='text-contrast-slateGray50'
                  />
                  <SquareLink
                    text='Cancelar'
                    color='bg-primary-brownPod600'
                    textColor='text-contrast-slateGray50'
                    onClick={goBack}
                  />
                </div>
                {/* Actualiza Password */}
                <div className='flex flex-col w-1/2'>
                  <SquareLink
                    text='Actualizar Password'
                    color='bg-primary-brownPod600'
                    textColor='text-contrast-slateGray50'
                    onClick={goToUpdatePassword}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <section className='hidden flex-col justify-start'>
        {/**
         * TODO: Add profilePicture as Dynamic prop
         */}
        <ProfilePicture
          role={role}
          profilePicture='/assets/images/stock-image-1.jpeg'
        />
      </section>
      {/* Sección derecha */}
      <section className='hidden flex-col gap-28 w-2/5 py-5'>
        {/* Header */}
        <div className='flex flex-row w-full justify-end gap-10'>
          {/* Nombre */}
          <div className='flex flex-col gap-2 '>
            <Header4 text='MI PERFIL' textColor='text-primary-brownPod800' />
            <Header5
              text={`${userName},`}
              textColor='text-primary-brownPod800'
            />
          </div>
          {/* Cuadro Café*/}
          <div className='bg-primary-brownPod700 w-1/5'></div>
        </div>
        {/* Profile Form */}
        <div>
          <form
            className='flex flex-col w-3/5 gap-5'
            onSubmit={console.log('Form de Profile Update')}
          >
            <div className='flex flex-col gap-3'>
              <label htmlFor='birthDate'>
                <Header6
                  textColor='text-contrast-slateGray700'
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
              {/* {errors?.birthDate?.message &&
                  displayLoginError(errors.birthDate.message)} */}
            </div>
            <div className=' flex flex-col gap-3'>
              <label htmlFor='professionalExperience'>
                <Header6
                  text='Experiencia profesional'
                  textColor='text-contrast-slateGray700'
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
              {/* Buttons */}
              <div className='flex flex-row justify-around gap-10'>
                {/* Aceptar || Cancelar */}
                <div className='flex flex-col w-1/2 gap-5'>
                  <FormSquareButton
                    text='Aceptar'
                    color='bg-primary-brownPod600'
                    textColor='text-contrast-slateGray50'
                  />
                  <SquareLink
                    text='Cancelar'
                    color='bg-primary-brownPod600'
                    textColor='text-contrast-slateGray50'
                    onClick={goBack}
                  />
                </div>
                {/* Actualiza Password */}
                <div className='flex flex-col w-1/2'>
                  <SquareLink
                    text='Actualizar Password'
                    color='bg-primary-brownPod600'
                    textColor='text-contrast-slateGray50'
                    onClick={goToUpdatePassword}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* </div> */}
      {/* Curved Background */}
      {/* <div className='h-24 absolute -bottom-0 w-full z-0'>
        <CurvedBackground color='bg-primary-brownPod700' />
      </div> */}
    </MainDashboardFrame>
  )
}

export default ProfessionalProfile
