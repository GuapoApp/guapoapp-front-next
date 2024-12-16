import Header2 from '../Header2'
import Header3 from '../Header3'

/**
 * PROPS:
 @param: userName ==> The name of the user
 */

const Welcome = (props) => {
  return (
    <div className='m-auto pl-16 flex flex-col'>
      <Header2 text='BIENVENIDO' textColor='text-primary-brownPod700' />
      <Header3
        text={`${props.userName},`}
        textColor='text-primary-brownPod700'
      />
    </div>
  )
}

export default Welcome
