import Header5 from '../Header5'
import SessionCard from './SessionCard'

import { formatDate, getSchedule } from '@/utils/dates'

import { useState, useEffect } from 'react'

const NextSessions = (props) => {
  const [nextSessions, setNextSessions] = useState([])
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_GUAPOAPP_URI}professional/sessions/${props.userId}?count=3&status=Scheduled`,
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
        setNextSessions(json.data)
      })
      .catch((error) => {
        console.log('Error:', error)
      })

    // console.log('Test:', formatDate('2025-01-03T10:00:00.000Z'))
  }, [props.userId])

  const displayNoSessions = () => {
    return (
      <div className='flex flex-col gap-3 p-2 justify-center items-center'>
        <Header5
          text='No tienes próximas citas'
          textColor='text-primary-brownPod900'
        />
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-2 w-4/5'>
      <div className='flex flex-col gap-3 p-2'>
        {!nextSessions || nextSessions.length === 0
          ? displayNoSessions()
          : nextSessions.map((session, sessionId) => (
              <SessionCard
                key={sessionId}
                dayName={formatDate(session.Date, 'es')}
                hour={getSchedule(session.Date)}
                user={session.Consultant.User.Name}
                sessionName={session.Consultancy_Type}
                sessionId={session._id}
              />
            ))}
      </div>
      {/*Footer Proximas citas*/}
      <div className='p-0'>
        <Header5 text='Próxima Citas' textColor='text-primary-brownPod900' />
      </div>
    </div>
  )
}

export default NextSessions
