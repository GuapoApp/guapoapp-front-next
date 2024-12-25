import clsx from 'clsx'

import Image from 'next/image'

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

  return (
    <article className={`${cardClasses}`}>
      {/* Barra Cafe */}
      <div className={`${cardSideBarClasses}`}></div>
      {/* Foto */}
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
      {children}
    </article>
  )
}
export default LongCardFrame
