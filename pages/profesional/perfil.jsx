import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import ProfilePicture from '@/components/dashboards/ProfilePicture'
import FormSquareButton from '@/components/forms/FormSquareButton'
import SquareLink from '@/components/SquareLink'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'
import AlertModal from '@/components/AlertModal'

import { useUserContext } from '../../context/UserContext'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { format, addDays, set } from 'date-fns'
import { convertFieldResponseIntoMuiTextFieldProps } from '@mui/x-date-pickers/internals'

const ProfessionalProfile = () => {
  const [userName, setUserName] = useState('')
  const [role, setRole] = useState('')
  const [professionalInfo, setProfessionalInfo] = useState({})
  const [birthDate, setBirthDate] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [updated, setUpdated] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
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
        // setValue('birthDate', birthDate)
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

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  const onSubmit = async (data) => {
    try {
      console.log('Data On Submit', data)
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_GUAPOAPP_URI}professional/${professionalId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            About: data.about,
            Birth_Date: data.birthDate
          })
        }
      )
      const json = await response.json()
      if (response.status === 200) {
        console.log('JSON: ', json)
        // setUpdated(!updated)
        setIsModalVisible(true)
        return
      }
      if (response.status === 400) {
        alert(`${json.error.error_message.message}`)
        return
      }
    } catch (error) {
      console.log('Error when updating professional:', error)
    }
  }

  const displayLoginError = (message) => {
    return <Paragraph text={message} textColor='text-red-600' />
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
              {errors?.birthDate?.message &&
                displayLoginError(errors.birthDate.message)}
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
                  // required: {
                  //   value: true,
                  //   message: 'Es necesario que nos cuentes sobre ti'
                  // }
                  validate: (value) => {
                    value.trim().length > 0 ||
                      'Es necesario que nos cuentes sobre ti'
                  }
                })}
                defaultValue={professionalInfo.About}
              ></textarea>
              {errors?.about?.message &&
                displayLoginError(errors.about.message)}
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
      <AlertModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        title='Usuario Actualizado'
        text='El usuario fue actualizado correctamente'
        button1='Aceptar'
      />
    </MainDashboardFrame>
  )
}

export default ProfessionalProfile
