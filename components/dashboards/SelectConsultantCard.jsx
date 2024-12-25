import LongCardFrame from './LongCardFrame'
import Header5 from '../Header5'
import Paragraph from '../Paragraph'
import SquareLink from '../SquareLink'

import { useRouter } from 'next/router'

const SelectConsultantCard = (props) => {
  const router = useRouter()

  const goToConsultantProfile = (e, consultantId) => {
    e.preventDefault()
    router.push(`/profesional/asesores/${consultantId}`)
  }

  const goToAgendaConfirmation = (e) => {
    e.preventDefault()
    router.push(`/profesional/agenda/checkout`)
  }

  return (
    <LongCardFrame
      cardColor={props.cardColor}
      sideColor={props.sideColor}
      profilePicture={props.profilePicture}
    >
      <div className='w-full flex flex-row gap-5'>
        {/* User || Consultancy Type */}
        <div className='flex flex-col gap-3 w-1/2 items-center'>
          <Header5
            text={props.consultantName}
            textColor='text-contrast-slateGray50'
          />
          <Paragraph
            text={props.consultancyType}
            textColor='text-contrast-slateGray50'
          />
        </div>
        {/* Profile and Select Buttons */}
        <div className='flex flex-row gap-10 w-1/2 justify-center'>
          <SquareLink
            color='bg-primary-brownPod950'
            text='Perfil'
            textColor='text-contrast-slateGray50'
            width='w-full'
            onClick={(event) => {
              goToConsultantProfile(event, props.consultantId)
            }}
          />
          <SquareLink
            color='bg-primary-brownPod950'
            text='Seleccionar'
            textColor='text-contrast-slateGray50'
            width='w-full'
            onClick={(event) => {
              goToAgendaConfirmation(event)
            }}
          />
        </div>
      </div>
    </LongCardFrame>
  )
}

export default SelectConsultantCard
