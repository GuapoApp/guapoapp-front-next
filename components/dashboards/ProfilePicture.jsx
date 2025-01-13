import Link from 'next/link'
import Image from 'next/image'
import DashboardMenu from './DashboardMenu'

/**
 * PROPS:
 @param: role ==> The role of the user
 @param: profilePicture ==> The profile picture of the user
 */

const ProfilePicture = (props) => {
  return (
    <div className='py-14 flex flex-row relative'>
      <DashboardMenu role={props.role} className='' />

      <Image
        alt=''
        className='lg:flex hidden p-2 rounded-tr-[70px] border-2 border-primary-brownPod700
         relative right-3 top-2 z-10 sm:hidden'
        src={props.profilePicture}
        width={380}
        height={380}
      />

      <div className='lg:flex hidden bg-primary-brownPod700 w-48 h-14 absolute -right-2 bottom-2 sm:hidden'></div>
    </div>
  )
}

export default ProfilePicture
