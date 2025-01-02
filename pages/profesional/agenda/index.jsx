import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import Calendar from '@/components/dashboards/Calendar'
import HourPicker from '@/components/dashboards/HourPicker'
import FormSquareButton from '@/components/forms/FormSquareButton'
import SquareLink from '@/components/SquareLink'
import DashboardMenu from '@/components/dashboards/DashboardMenu'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'
import DashboardTitleHeader from '@/components/dashboards/DashboardTitleHeader'

import { useSessionContext } from '@/context/SessionContext'

import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { set } from 'date-fns'

const ProfessionalAgenda = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  const [role, setRole] = useState('')

  const {
    session,
    setSession,
    sessionDate,
    setSessionDate,
    sessionTime,
    setSessionTime
  } = useSessionContext()

  const router = useRouter()

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setRole(decoded.Role)
    }
  }, [])

  const goBack = (e) => {
    e.preventDefault()
    router.push('/profesional')
  }

  const onSubmit = async (data) => {
    console.log('Data:', data)
    setSession(data)
    console.log('Session:', session)
    console.log('Session Date:', sessionDate)
    console.log('Session Time:', sessionTime)
    router.push('/profesional/agenda/asesor')
  }

  return (
    <MainDashboardFrame footerColor='bg-primary-brownPod700'>
      {/* Menu */}
      <div className='h-full w-1/6'>
        <DashboardMenu role={role} />
      </div>
      {/* Calendar || Hour Picker */}
      <div className='flex flex-col justify-center gap-5 h-full w-2/6 p-5'>
        {/* Calendar */}
        <div className='flex flex-col justify-center gap-5 border border-secondary-satinLinen100 shadow-lg p-5 rounded-lg'>
          <Header6
            text='SELECCIONA UNA FECHA'
            textColor='text-primary-brownPod800'
            textAlign='text-center'
          />
          <Calendar />
        </div>
        {/* Hour Picker */}
        <div className='flex flex-col justify-center items-center border border-secondary-satinLinen100 shadow-lg p-5 rounded-lg gap-5'>
          <Header6
            text='SELECCIONA UNA HORA'
            textColor='text-primary-brownPod800'
            textAlign='text-center'
          />
          <HourPicker />
        </div>
      </div>
      {/* Agenda Form */}
      <div className='flex flex-col h-full w-3/6 gap-10'>
        {/* Header */}
        <DashboardTitleHeader
          title='AGENDA'
          squareColor='bg-primary-brownPod700'
          titleColor='text-primary-brownPod800'
        />
        {/* Título */}
        <div className='flex flex-row w-full justify-center'>
          <Header5
            text='SELECCIONA EL TIPO DE ASESORÍA QUE NECESITAS'
            textColor='text-primary-brownPod800'
          />
        </div>
        {/* Form */}
        <div className='flex flex-row w-full pr-10'>
          <form
            className='flex flex-col gap-7 w-full'
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Consultancy Type */}
            <div className='flex flex-row gap-5'>
              <input
                className={``}
                type='radio'
                name='consultancyType'
                // id='role'
                value='Integral'
                {...register('consultancyType')}
                defaultChecked
              />
              <label className='w-full' htmlFor='Integral'>
                <Header6
                  text='Asesoría Integral'
                  textColor='text-contrast-slateGray500'
                />
              </label>
              <input
                className={``}
                type='radio'
                name='consultancyType'
                // id='role'
                value='Event'
                {...register('consultancyType')}
              />
              <label className='w-full' htmlFor='Event'>
                <Header6
                  text='Asesoría para un evento'
                  textColor='text-contrast-slateGray500'
                />
              </label>
            </div>
            {/* Event Type */}
            <div className='flex flex-col gap-5 items-center'>
              <label htmlFor='EventType'>
                <Header6
                  text='¿Cuál es tu evento?'
                  textColor='text-contrast-slateGray500'
                />
              </label>
              <div className='p-3 bg-contrast-slateGray50 border border-secondary-satinLinen100 rounded-md'>
                <select name='eventType' className='bg-contrast-slateGray50'>
                  <option value='Complete'>Asesoría Integral</option>
                  <option value='Event'>Asesoría para un evento</option>
                </select>
              </div>
            </div>
            {/* Consultancy Detail || Either Event or Complete */}
            <div className='flex flex-row gap-5'>
              {/* Event */}
              <div className='flex flex-col gap-3 w-1/2'>
                <div>
                  <Header6
                    text='Cuéntanos sobre tu evento'
                    textColor='text-contrast-slateGray500'
                  />
                </div>
                <div>
                  <textarea
                    name='eventDescription'
                    id='eventDescription'
                    placeholder='Escribe aquí sobre tu evento'
                    className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                    rows='5'
                    maxLength='200'
                    {...register('eventDescription', {
                      // required: {
                      //   value: true,
                      //   message: 'La experiencia profesional es requerida'
                      // }
                    })}
                  ></textarea>
                </div>
              </div>
              {/* Complete */}
              <div className='flex flex-col gap-3 w-1/2'>
                <div>
                  <Header6
                    text='Cuéntanos qué quieres obtener en tu asesoría'
                    textColor='text-contrast-slateGray500'
                  />
                </div>
                <div>
                  <textarea
                    name='consultancyDescription'
                    id='consultancyDescription'
                    placeholder='Escribe aquí lo que quieres obtener'
                    className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                    rows='5'
                    maxLength='200'
                    {...register('consultancyDescription', {
                      // required: {
                      //   value: true,
                      //   message: 'La experiencia profesional es requerida'
                      // }
                    })}
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Submit and Back Buttons */}
            <div className='flex flex-row gap-5'>
              <FormSquareButton
                text='Continuar'
                color='bg-primary-brownPod600'
                width='w-1/5'
                textColor='text-contrast-slateGray50'
              />
              <SquareLink
                text='Regresar'
                color='bg-primary-brownPod600'
                width='w-1/5'
                textColor='text-contrast-slateGray50'
                onClick={goBack}
              />
            </div>
          </form>
        </div>
      </div>
    </MainDashboardFrame>
  )
}

export default ProfessionalAgenda
