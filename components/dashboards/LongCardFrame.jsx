import clsx from 'clsx'

import Image from 'next/image'

/** 
 * The component is a frame with a side bar and a profile picture if required for wrapping some children tags to create a card
 * 
 * PROPS:
 @param: cardColor: The color of the card
 @param: sideColor: The color of the side bar
 @param: profilePicture: The profile picture of the user || if not passed, the card will not display a profile picture
 */
const LongCardFrame = ({ cardColor, sideColor, profilePicture, children }) => {
  const cardClasses = clsx({
    [cardColor]: cardColor,
    flex: true,
    'flex-row': true,
    'w-4/5': true,
    'h-24': true,
    'gap-5': true,
    'items-center': true,
    'pr-6': true
  })

  const cardSideBarClasses = clsx({
    [sideColor]: sideColor,
    'h-full': true,
    'w-4': true
  })

  const displayProfilePicture = () => {
    return (
      <div className='pt-7'>
        <div className='relative w-16 h-16'>
          <Image
            src={profilePicture}
            alt=''
            layout='fill'
            objectFit='cover'
            className='rounded-tr-[30px]'
          />
        </div>
      </div>
    )
  }

  return (
    <article className={`${cardClasses}`}>
      {/* Barra Cafe */}
      <div className={`${cardSideBarClasses}`}></div>
      {/* Foto */}
      {profilePicture && displayProfilePicture()}
      {children}
    </article>
  )
}
export default LongCardFrame
