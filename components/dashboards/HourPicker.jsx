import dayjs from 'dayjs'
import { useState, useEffect } from 'react'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

const HourPicker = () => {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {}, [])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label='Selecciona la hora'
        value={time}
        onChange={(value) => setTime(value)}
      />
    </LocalizationProvider>
  )
}

export default HourPicker
