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
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'
import DashboardNavbar from '@/components/dashboards/DashboardNavbar'
import DashboardMenu from '@/components/dashboards/DashboardMenu'

import Image from 'next/image'

/**
 * PROPS:
 @param: consultantName: The consultant's name
 @param: consultancyType: The consultancy type
 @param: lastSessionDate: The last session date
 @param: lastSessionSchedule: The last session schedule
 @param: profilePicture: The consultant's profile picture 
 @param: consultantId: The consultant's ID
 @param: buttonText: The text of the button
 */

const SessionFileCard = (props) => {
  return (
    <article className='flex flex-row w-4/5 bg-primary-brownPod600 h-24 gap-5 items-center pr-6'>
      {/* Barra Cafe */}
      <div className='h-full w-4 bg-primary-brownPod800'></div>
      {/* Foto */}
      <div className='pt-7'>
        <div className='relative w-16 h-16'>
          <Image
            src={props.profilePicture}
            alt=''
            layout='fill'
            objectFit='cover'
            className='rounded-tr-[30px]'
          />
        </div>
      </div>
      {/* User || Consultancy Type */}
      <div className='flex flex-col gap-1 w-2/6 justify-center items-center p-3'>
        <Header5
          text={props.consultantName}
          textColor='text-contrast-slateGray50'
          textAlign='text-center'
        />
        <Paragraph
          text={props.consultancyType}
          textColor='text-contrast-slateGray50'
          textAlign='text-center'
        />
      </div>
      {/* White Line */}
      <div className='h-[90%] w-[2px] bg-contrast-slateGray50'></div>
      {/* Session Schedule */}
      <div className='flex flex-col gap-1 w-2/5 items-center justify-center'>
        <Header5
          text='Fecha sesión'
          textColor='text-primary-brownPod950'
          textAlign='text-center'
        />
        <Paragraph
          text={props.lastSessionDate}
          textColor='text-contrast-slateGray50'
          textAlign='text-center'
        />
        <Paragraph
          text={props.lastSessionSchedule}
          textColor='text-contrast-slateGray50'
          textAlign='text-center'
        />
      </div>
      {/* File Button */}
      <div className='flex flex-row mx-auto w-1/6'>
        <SquareLink
          text={props.buttonText}
          color='bg-primary-brownPod950'
          textColor='text-contrast-slateGray50'
          width='w-full'
          onClick={(event) => {
            event.preventDefault()
            console.log('Download File')
          }}
        />
      </div>
    </article>
  )
}

export default SessionFileCard
