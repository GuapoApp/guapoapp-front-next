import Paragraph from '../Paragraph'
import clsx from 'clsx'

/**
 @param: dayName ==> The name of the day
 @param: hour ==> The hour of the session
 @param: user ==> The name of the user || either the consultant or the professional
 @param: sessionName ==> The name of the session or the subject
 @param: day ==> The day of the session (Format dd/mm) 
 */

const SessionCard = (props) => {
  const cardSideBarClasses = clsx({
    [props.sideColor]: props.sideColor,
    'h-full': true,
    'w-4': true
  })

  return (
    <div className='flex flex-row justify-around gap-5 py-4 pl-0 bg-primary-brownPod600 h-[90px] w-4/6'>
      {/* Day */}
      <div className={`${cardSideBarClasses}`}></div>
      {/* <div className='bg-primary-brownPod800 font-bold w-10 h-[80px] flex items-center justify-center'>
        <Paragraph
          text={props.dayName}
          textColor='text-contrast-slateGray50'
          padding='pr-1'
        />
      </div> */}
      {/* Hour */}
      <div className='flex grow-0 items-center'>
        <Paragraph text={props.hour} textColor='text-contrast-slateGray50' />
      </div>
      {/* Line */}
      <div className='h-[90%] w-[2px] bg-contrast-slateGray50'></div>
      {/* Consultant */}
      <div className='flex flex-row grow justify-around items-center'>
        <div>
          <Paragraph text={props.user} textColor='text-contrast-slateGray50' />
          <Paragraph
            text={props.sessionName}
            textColor='text-contrast-slateGray50'
          />
        </div>
        <div>
          <Paragraph text={props.day} textColor='text-contrast-slateGray50' />
        </div>
      </div>
    </div>
  )
}

export default SessionCard
