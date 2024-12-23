import Paragraph from '../Paragraph'
/**
 @param: dayName ==> The name of the day
 @param: hour ==> The hour of the session
 @param: user ==> The name of the user || either the consultant or the professional
 @param: sessionName ==> The name of the session or the subject
 @param: day ==> The day of the session (Format dd/mm) 
 */

const SessionCard = (props) => {
  return (
    <div className='flex flex-row justify-around gap-5 py-4 pl-0 bg-primary-brownPod600 h-1/3'>
      {/* Day */}
      <div className='grow-0 bg-primary-brownPod800 -rotate-90 font-bold '>
        <Paragraph
          text={props.dayName}
          textColor='text-contrast-slateGray50'
          padding='p-1'
          textAlign='text-center'
        />
      </div>
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
