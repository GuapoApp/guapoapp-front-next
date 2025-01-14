import clsx from 'clsx'

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
import ConsultantCard from '@/components/dashboards/ConsultantCard'
import DashboardMenu from '@/components/dashboards/DashboardMenu'
import ConsultantBanner from '@/components/dashboards/ConsultantBanner'
import YourConsultant from '@/components/dashboards/YourConsultant'

import Image from 'next/image'

/** 
 * PROPS:
 @param: profilePicture ==> The profile picture of the professional
 @param: professionalName ==> The name of the professional
 @param: daysAgo ==> The number of days since the review was made
 @param: rating ==> The rating of the professional
 @param: comment ==> The comment of the review   
*/

const ReviewCard = (props) => {
  const cardClasses = clsx({
    [props.width]: props.width,
    flex: true,
    'flex-col': true,
    border: true,
    'border-secondary-satinLinen100': true,
    'shadow-lg': true,
    'p-10': true,
    'rounded-lg': true,
    'gap-3': true,
    'h-[350px]': true
  })

  return (
    <article className={`${cardClasses}`}>
      {/* Foto y nombre */}
      <div className='flex flex-row gap-7'>
        {/* Foto */}
        <div className='relative w-24 h-24'>
          <Image
            src={props.profilePicture}
            alt=''
            layout='fill'
            objectFit='cover'
            className='rounded-full'
          />
        </div>
        {/* Nombre y hace cuánto */}
        <div className='flex flex-col gap-1'>
          <Header6
            text={props.professionalName}
            textColor='text-secondary-satinLinen400'
          />
          <Paragraph text={`Hace ${props.daysAgo} día(s)`} />
        </div>
      </div>
      {/* Calificación */}
      <div className='flex flex-row gap-5 items-center'>
        {/* Rating */}
        <div>
          <Header5 text={props.rating} textColor='text-primary-brownPod600' />
        </div>
        {/* Estrellas */}
        <div>* * * * *</div>
      </div>
      {/* Comentario */}
      <div>
        <Paragraph
          text={props.comment}
          textColor='text-contrast-slateGray950'
        />
      </div>
    </article>
  )
}

export default ReviewCard
