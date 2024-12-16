import { clsx } from 'clsx'

import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })

/** 
 * PROPS:
 @param: textColor ==> The color of the text
 @param: text ==> The text to be printed 
 @param: textAlign ==> The alignment of the text
*/
const Header4 = (props) => {
  const headerClasses = clsx({
    [props.textColor]: props.textColor,
    'text-3xl': true,
    [props.textAlign]: props.textAlign
  })

  return (
    <h4 className={`${ubuntu.className} ${headerClasses}`}>{props.text}</h4>
  )
}

export default Header4
