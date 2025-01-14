import dayjs from 'dayjs'

import { useSessionContext } from '@/context/SessionContext'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'

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
    setSessionDate(format(date, 'yyyy-MM-dd').toString())
    // console.log('Session Date', sessionDate)
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={date}
        onChange={(value) => {
          setSessionDate(format(value, 'yyyy-MM-dd').toString())
          // console.log('Session Date', sessionDate)
        }}
      />
    </LocalizationProvider>
  )
}

export default Calendar
