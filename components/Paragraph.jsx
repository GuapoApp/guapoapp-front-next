import classNames from 'classnames'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

/** 
 * PROPS:
 @param: textColor ==> The color of the text
 @param: text ==> The text to be printed 
*/
const Paragraph = (props) => {
  const paragraphClasses = classNames({
    [`text-[${props.textColor}]`]: props.textColor
  })

  return (
    <p className={`${cabin.className} text-base ${paragraphClasses}`}>
      {props.text}
    </p>
  )
}

export default Paragraph
