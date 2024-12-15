import dayjs from 'dayjs'
import { useState, useEffect } from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

const Calendar = () => {
  const [date, setDate] = useState(dayjs())

  useEffect(() => {
    console.log('Now', date)
  }, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={date} onChange={(value) => setDate(value)} />
    </LocalizationProvider>
  )
}

export default Calendar
