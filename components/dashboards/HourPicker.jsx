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
    console.log('Time', time)
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label='Selecciona la hora'
        value={time}
        onChange={(value) => setSessionTime(value)}
      />
    </LocalizationProvider>
  )
}

export default HourPicker
