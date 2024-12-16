import classNames from 'classnames'

import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })

/** 
 * PROPS:
 @param: textColor ==> The color of the text
 @param: text ==> The text to be printed 
*/
const Header5 = (props) => {
  const headerClasses = classNames({
    [`text-${props.textColor}`]: props.textColor,
    'text-2xl': true
  })

  return (
    <h5 className={`${ubuntu.className} ${headerClasses}`}>{props.text}</h5>
  )
}

export default Header5
