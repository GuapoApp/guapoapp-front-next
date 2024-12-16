import { clsx } from 'clsx'

import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })

/** 
 * PROPS:
 @param: text ==> The text to be printed 
 @param: textColor ==> The color of the text
 @param: textAlign ==> The alignment of the text
*/
const Header1 = (props) => {
  const headerClasses = clsx({
    [props.textColor]: props.textColor,
    'text-6xl': true,
    [props.textAlign]: props.textAlign
  })

  return (
    <h1 className={`${ubuntu.className} ${headerClasses}`}>{props.text}</h1>
  )
}

export default Header1
