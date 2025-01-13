import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import CurvedBackground from '@/components/CurvedBackground'
import Welcome from '@/components/dashboards/Welcome'
import ProfilePicture from '@/components/dashboards/ProfilePicture'
import Calendar from '@/components/dashboards/Calendar'
import HourPicker from '@/components/dashboards/HourPicker'
import SessionCard from '@/components/dashboards/SessionCard'
import FormSquareButton from '@/components/forms/FormSquareButton'
import SquareLink from '@/components/SquareLink'

/**
 * PROPS:
 @param: experienceYears: The years of experience of the consultant
 @param: sessionsCount: The number of sessions the consultant has done
 @param: averageRating: The average rating of the consultant
 */

const ConsultantBanner = (props) => {
  return (
    <div className='lg:ml-20 flex flex-row gap-14 bg-primary-brownPod600 p-5 justify-center px-20 py-10 h-40 w-full'>
      {/* Experiencia */}
      <div className='flex flex-col gap-2'>
        <Header1
          text={props.experienceYears}
          textColor='text-contrast-slateGray50'
          textAlign='text-center'
        />
        <Header6
          text='Años de Experiencia'
          textColor='text-contrast-slateGray50'
          textAlign='text-center'
          textWrap
        />
      </div>
      {/* Line */}
      <div className='h-[90%] w-[2px] bg-contrast-slateGray50'></div>
      {/* Número de Asesorías Realizadas */}
      <div className='flex flex-col gap-2'>
        <Header1
          text={props.sessionsCount}
          textColor='text-contrast-slateGray50'
          textAlign='text-center'
        />
        <Header6
          text='Asesorías Realizadas'
          textColor='text-contrast-slateGray50'
          textAlign='text-center'
          textWrap
        />
      </div>
      {/* Line */}
      <div className='h-[90%] w-[2px] bg-contrast-slateGray50'></div>
      {/* Calificación */}
      <div className='flex flex-col gap-2'>
        <Header1
          text={props.averageRating}
          textColor='text-contrast-slateGray50'
          textAlign='text-center'
        />
        <Header6
          text='Calificación Promedio'
          textColor='text-contrast-slateGray50'
          textAlign='text-center'
          textWrap
        />
      </div>
    </div>
  )
}

export default ConsultantBanner
