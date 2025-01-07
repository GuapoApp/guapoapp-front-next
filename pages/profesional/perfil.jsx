import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import ProfilePicture from '@/components/dashboards/ProfilePicture'
import FormSquareButton from '@/components/forms/FormSquareButton'
import SquareLink from '@/components/SquareLink'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'

import { useUserContext } from '../../context/UserContext'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { format, addDays } from 'date-fns'

const ProfessionalProfile = () => {
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('')
  const [professionalInfo, setProfessionalInfo] = useState({})
  const [birthDate, setBirthDate] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  const {
    user,
    setUser,
    token,
    setToken,
    userId,
    setUserId,
    professionalId,
    setProfessionalId,
    consultantId,
    setConsultantId
  } = useUserContext()

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setUserName(decoded.Name)
      setRole(decoded.Role)
    }

    fetch(
      `${process.env.NEXT_PUBLIC_GUAPOAPP_URI}professional/${professionalId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.token}`
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setProfessionalInfo(json.data)
        setProfilePicture(json.data.User.Profile_Picture)
        setBirthDate(
          format(addDays(json.data.User.Birth_Date, 1), 'yyyy-MM-dd', {
            timezone: 'America/Mexico_City'
          })
        )
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }, [])

  const router = useRouter()

  const goToUpdatePassword = (e) => {
    e.preventDefault()
    router.push('/password')
  }

  const goBack = (e) => {
    e.preventDefault()
    router.push('/profesional')
  }

  const onSubmit = async (data) => {
    try {
      console.log('Data', data)
      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_GUAPOAPP_URI}session`,
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       Date: new Date(sessionDate),
      //       Transcript: '',
      //       Status: 'Scheduled',
      //       Paid: false,
      //       Professional: sessionProfesionalId,
      //       Consultant: sessionConsultantId,
      //       Consultancy_Type: session.consultancyType,
      //       About:
      //         session.consultancyType === 'Event'
      //           ? session.eventDescription
      //           : session.consultancyDescription
      //     })
      //   }
      // )
      // const json = await response.json()
      // if (response.status === 201) {
      //   // console.log('JSON: ', json)
      //   alert('Sesión registrada correctamente')
      //   return
      // }
      // if (response.status === 400) {
      //   alert(`${json.error.error_message.message}`)
      //   return
      // }
    } catch (error) {
      console.log('Error when updating professional:', error)
    }
  }

  return (
    <MainDashboardFrame footerColor='bg-primary-brownPod600'>
      {/* Menu y sección izquierda */}
      <div className='w-2/6'>
        <ProfilePicture role={role} profilePicture={profilePicture} />
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
            onSubmit={handleSubmit(onSubmit)}
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
                defaultValue={birthDate}
              />
            </div>
            {/* <Paragraph text={birthDate} /> */}
            <div className=' flex flex-col gap-3'>
              <label htmlFor='about'>
                <Header6
                  text='Sobre tí'
                  textColor='text-contrast-slateGray700'
                />
              </label>
              <textarea
                name='about'
                id='about'
                placeholder='Escribe aquí sobre tí'
                className={`w-full p-3 text-contrast-slateGray500 rounded-md text-xl bg-contrast-slateGray300`}
                rows='5'
                maxLength='200'
                {...register('about', {
                  required: {
                    value: true,
                    message: 'Es necesario que nos cuentes sobre ti'
                  }
                })}
                defaultValue={professionalInfo.About}
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
    </MainDashboardFrame>
  )
}

export default ProfessionalProfile
