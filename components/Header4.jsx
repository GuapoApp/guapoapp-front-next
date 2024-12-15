import classNames from 'classnames'

import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })

/** 
 * PROPS:
 @param: textColor ==> The color of the text
 @param: text ==> The text to be printed 
*/
const Header4 = (props) => {
  const headerClasses = classNames({
    [`text-${props.textColor}`]: props.textColor,
    'text-3xl': true
  })

  return (
    <h4 className={`${ubuntu.className} ${headerClasses}`}>{props.text}</h4>
  )
}

export default Header4
