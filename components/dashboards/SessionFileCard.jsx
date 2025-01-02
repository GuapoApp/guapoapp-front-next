import Header5 from '@/components/Header5'
import Paragraph from '@/components/Paragraph'
import SquareLink from '@/components/SquareLink'
import LongCardFrame from './LongCardFrame'

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
    <LongCardFrame
      cardColor='bg-primary-brownPod600'
      sideColor='bg-primary-brownPod800'
      profilePicture={props.profilePicture}
    >
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
    </LongCardFrame>
  )
}

export default SessionFileCard
