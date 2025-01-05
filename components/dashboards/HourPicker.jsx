import dayjs from 'dayjs'

import { useSessionContext } from '@/context/SessionContext'

import { useState, useEffect } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

const HourPicker = () => {
  const [time, setTime] = useState(dayjs())

  const {
    session,
    setSession,
    sessionDate,
    setSessionDate,
    sessionTime,
    setSessionTime
  } = useSessionContext()

  useEffect(() => {
    // console.log('Time', time)
    setTime(time)
    // console.log('Time', time)
    setSessionTime(
      `${time.$H.toString().padStart(2, '0')}:${time.$m
        .toString()
        .padStart(2, '0')}`
    )
    // console.log('Session Time', sessionTime)
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label='Selecciona la hora'
        value={time}
        onChange={(value) =>
          setSessionTime(
            `${value.$H.toString().padStart(2, '0')}:${value.$m
              .toString()
              .padStart(2, '0')}`
          )
        }
      />
    </LocalizationProvider>
  )
}

export default HourPicker
