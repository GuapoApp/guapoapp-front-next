import Header2 from '../Header2'
import Header3 from '../Header3'

/**
 * PROPS:
 @param: consultantName ==> The name of the user
 */

const YourConsultant = (props) => {
  return (
    <div className='m-auto pl-16 flex flex-col'>
      <Header2 text='TU CONSULTOR' textColor='text-primary-brownPod900' />
      <Header3
        text={`${props.consultantName},`}
        textColor='text-primary-brownPod900'
      />
    </div>
  )
}

export default YourConsultant
