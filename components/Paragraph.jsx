import { clsx } from 'clsx'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

/** 
 * PROPS:
 @param: textColor ==> The color of the text
 @param: text ==> The text to be printed 
 @param: textAlign ==> The alignment of the text
*/
const Paragraph = (props) => {
  const paragraphClasses = clsx({
    [props.textColor]: props.textColor,
    [props.textAlign]: props.textAlign,
    'text-base': true
  })

  return (
    <p className={`${cabin.className} ${paragraphClasses}`}>{props.text}</p>
  )
}

export default Paragraph
