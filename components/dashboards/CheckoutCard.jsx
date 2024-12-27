import Header5 from '../Header5'
import Paragraph from '../Paragraph'

import clsx from 'clsx'

import Image from 'next/image'

const CheckoutCard = (props) => {
  const cardClasses = clsx({
    [props.cardColor]: props.cardColor,
    flex: true,
    'flex-row': true,
    'w-full': true,
    'h-24': true,
    'gap-5': true,
    'items-center': true,
    'p-3': true,
    'rounded-e-xl': true
  })

  return (
    <article className={`${cardClasses}`}>
      {/* Foto */}
      <div className='pt-7'>
        <div className='relative w-16 h-16'>
          <Image
            src={props.profilePicture}
            alt=''
            layout='fill'
            objectFit='cover'
            className='rounded-tr-[30px]'
          />
        </div>
      </div>
      {/* Information */}
      <div className='flex flex-col gap-1'>
        <Header5
          text={props.consultantName}
          textColor='text-contrast-slateGray50'
        />
        <Paragraph
          text={props.consultancyType}
          textColor='text-contrast-slateGray50'
        />
        <Paragraph
          text={props.sessionDate}
          textColor='text-contrast-slateGray50'
        />
        <Paragraph
          text={props.sessionSchedule}
          textColor='text-contrast-slateGray50'
        />
      </div>
    </article>
  )
}

export default CheckoutCard
