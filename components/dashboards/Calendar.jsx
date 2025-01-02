import dayjs from 'dayjs'

import { useSessionContext } from '@/context/SessionContext'

import { useState, useEffect } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

const Calendar = () => {
  const [date, setDate] = useState(dayjs())

  const {
    session,
    setSession,
    sessionDate,
    setSessionDate,
    sessionTime,
    setSessionTime
  } = useSessionContext()

  useEffect(() => {
    console.log('Now', date.$d)
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={date}
        onChange={(value) => {
          setSessionDate(value)

          console.log('Date Change', sessionDate)
        }}
      />
    </LocalizationProvider>
  )
}

export default Calendar
