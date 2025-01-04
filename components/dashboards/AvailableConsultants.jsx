import SelectConsultantCard from './SelectConsultantCard'
import Header5 from '../Header5'

import { useSessionContext } from '@/context/SessionContext'

import { useEffect, useState } from 'react'
import { set } from 'date-fns'

const AvailableConsultants = (props) => {
  const [availableConsultants, setAvailableConsultants] = useState([])

  const {
    session,
    setSession,
    sessionDate,
    setSessionDate,
    sessionTime,
    setSessionTime,
    sessionConsultantId,
    setSessionConsultantId,
    sessionConsultantName,
    setSessionConsultantName,
    sessionConsultantPhoto,
    setSessionConsultantPhoto
  } = useSessionContext()

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_GUAPOAPP_URI}consultant/availability?date=${props.date}&hour=${props.hour}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${props.token}`
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setAvailableConsultants(json.data)
        // setSessionConsultantId(json.data[0]._id)
        // setSessionConsultantName(json.data[0].User.Name)
        // setSessionConsultantPhoto(json.data[0].User.Profile_Picture)
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }, [props.date])

  const displayNoConsultants = () => {
    return (
      <div className='flex flex-col gap-3 p-2 justify-center items-center'>
        <Header5
          text='No hay asesores disponibles'
          textColor='text-primary-brownPod900'
        />
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-5'>
      {!availableConsultants || availableConsultants.length === 0
        ? displayNoConsultants()
        : availableConsultants.map((consultant, consultantId) => (
            <SelectConsultantCard
              key={consultantId}
              profilePicture={consultant.User.Profile_Picture}
              consultantName={consultant.User.Name}
              consultantId={consultant._id}
              cardColor='bg-primary-brownPod600'
              sideColor='bg-primary-brownPod700'
            />
          ))}
    </div>
  )
}

export default AvailableConsultants
