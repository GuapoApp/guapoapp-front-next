import Paragraph from '../Paragraph'
import Header6 from '../Header6'
import LongCardFrame from './LongCardFrame'
import SquareLink from '../SquareLink'

import clsx from 'clsx'

/**
 @param: dayName ==> The name of the day
 @param: hour ==> The hour of the session
 @param: user ==> The name of the user || either the consultant or the professional
 @param: sessionName ==> The name of the session or the subject
 @param: day ==> The day of the session (Format dd/mm) 
 */

const SessionCard = (props) => {
  return (
    <LongCardFrame
      cardColor='bg-primary-brownPod600'
      sideColor='bg-primary-brownPod800'
    >
      {/* Day || Hour */}
      <div className='flex flex-col items-center w-2/6 gap-2'>
        <Header6 text={props.dayName} textColor='text-contrast-slateGray50' />
        <Paragraph text={props.hour} textColor='text-contrast-slateGray50' />
      </div>
      {/* Line */}
      <div className='h-[90%] w-[2px] bg-contrast-slateGray50'></div>
      {/* Consultant */}
      <div className='flex flex-col items-start w-2/6 gap-2'>
        <Header6 text={props.user} textColor='text-contrast-slateGray50' />
        <Paragraph
          text={props.sessionName}
          textColor='text-contrast-slateGray50'
        />
      </div>
      <div className='flex flex-row justify-end w-2/6'>
        <SquareLink
          color='bg-primary-brownPod950'
          textColor='text-contrast-slateGray50'
          text='Iniciar'
          width='w-4/6'
        />
      </div>
    </LongCardFrame>
  )
}

export default SessionCard
