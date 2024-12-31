import { format } from 'date-fns'
import { es, fr, ja } from 'date-fns/locale'
// const format = require('date-fns')

const formatDate = (date, language) => {
  if (language === 'es') {
    return (
      format(date, 'eeee', { locale: es }).charAt(0).toUpperCase() +
      format(date, 'eeee', { locale: es }).slice(1)
    )
  }

  return format(date, 'eeee')
}

// const formatHour = (date) => {
//   return `${date.substring(11, 16)} ${isAMOrPM(date.substring(11, 13))}`
// }

const isAMOrPM = (hour) => {
  return hour >= 12 ? 'PM' : 'AM'
}

const getSchedule = (date) => {
  const hour = date.substring(11, 13)
  const minutes = date.substring(14, 16)

  return `${hour}:${minutes} ${isAMOrPM(hour)} A ${
    parseInt(hour) + 1
  }:${minutes} ${isAMOrPM(hour)}`
}

export { formatDate, getSchedule }
