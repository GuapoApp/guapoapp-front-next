import { clsx } from 'clsx'

import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })

/** 
 * PROPS:
 @param: textColor ==> The color of the text
 @param: text ==> The text to be printed 
 @param: textAlign ==> The alignment of the text
*/
const Header5 = (props) => {
  const headerClasses = clsx({
    [props.textColor]: props.textColor,
    'text-2xl': true,
    [props.textAlign]: props.textAlign
  })

  return (
    <h5 className={`${ubuntu.className} ${headerClasses}`}>{props.text}</h5>
  )
}

export default Header5
