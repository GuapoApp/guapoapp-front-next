import Header5 from '@/components/Header5'
import Paragraph from '@/components/Paragraph'
import SquareLink from '../SquareLink'
import LongCardFrame from './LongCardFrame'

import clsx from 'clsx'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

import { useRouter } from 'next/router'

/**
 * PROPS:
 @param: consultantName: The consultant's name
 @param: consultancyType: The consultancy type
 @param: lastSessionDate: The last session date
 @param: lastSessionSchedule: The last session schedule
 @param: profilePicture: The consultant's profile picture in format tailwind class (e.g. 'bg-[url]') || bg-[url("/assets/images/stock-image-4.jpg")]
 @param: consultantId: The consultant's ID
 */

const ConsultantCard = (props) => {
  // const pictureClasses = clsx({
  //   [props.profilePicture]: props.profilePicture,
  //   'rounded-tr-[30px]': true,
  //   'w-24': true,
  //   'h-24': true,
  //   'bg-cover': true
  // })

  const router = useRouter()

  const goToConsultantProfile = (e, consultantId) => {
    e.preventDefault()
    router.push(`/profesional/asesores/${consultantId}`)
  }

  return (
    <LongCardFrame
      cardColor='bg-primary-brownPod600'
      sideColor='bg-primary-brownPod800'
      profilePicture={props.profilePicture}
    >
      {/* Nombre || Tipo Asesoría */}
      <div className='flex flex-col gap-1 w-1/5 justify-center items-center'>
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
      {/* Línea Blanca */}
      <div className='h-[90%] w-[2px] bg-contrast-slateGray50'></div>
      {/* Fecha Última Sesión */}
      <div className='flex flex-col gap-1 w-2/5 items-center justify-center'>
        <Header5
          text='Fecha de última sesión'
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
      {/* Profile Button */}
      <div className='flex flex-row mx-auto w-1/6'>
        <SquareLink
          text='Perfil'
          color='bg-primary-brownPod950'
          textColor='text-contrast-slateGray50'
          width='w-full'
          onClick={(event) => {
            goToConsultantProfile(event, props.consultantId)
          }}
        />
      </div>
    </LongCardFrame>
    // <div className='w-4/5 h-28 bg-primary-brownPod600 flex flex-row gap-5 items-center'>

    // <div className='h-full w-4 bg-primary-brownPod800'></div>

    // <div className={`${cabin.className} ${pictureClasses}`}></div>

    // </div>
  )
}

export default ConsultantCard
