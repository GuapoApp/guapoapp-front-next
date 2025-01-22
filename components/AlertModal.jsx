import Image from 'next/image'
import Header5 from './Header5'
import Header6 from './Header6'
import SquareLink from './SquareLink'

/**
 * PROPS:
 @param: title ==> The title of the modal
 @param: text ==> The text of the modal
 @param: button1 ==> The text of the button 1
 @param: button2 ==> The text of the button 2 (optional) || if not passed it will not be displayed
 */
export default function ModalBox(props) {
  if (!props.isVisible) return null

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex 
                             justify-center text-center items-center z-50'
    >
      <div
        className='bg-contrast-slateGray100 bg-opacity-30 w-[40%] rouded flex flex-col 
                  justify-center items-center gap-5'
      >
        <div
          className='flex justify-center rounded-t-lg w-full bg-primary-brownPod950
                   items-center'
        >
          <Image
            className='relative -mt-6'
            src='/assets/logos/logo-blanco.png'
            alt='GuapoApp Logo'
            width={150}
            height={150}
          />
        </div>
        <div className='flex flex-col text-center p-2 gap-5'>
          <Header5 text={props.title} textColor='text-primary-brownPod950' />
          <Header6 text={props.text} textColor='text-primary-brownPod950' />
          <div className='items-center justify-center flex flex-col gap-5'>
            <SquareLink
              color='bg-primary-brownPod600'
              textColor='text-contrast-slateGray50'
              text={props.button1}
              onClick={props.onClose}
              width='w-2/6'
            />
            {props.button2 && (
              <SquareLink
                color='bg-primary-brownPod600'
                textColor='text-contrast-slateGray50'
                text={props.button2}
                onClick={props.onClick}
                width='w-2/6'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
