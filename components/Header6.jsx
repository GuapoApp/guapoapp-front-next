import classNames from 'classnames'

import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })

/** 
 * PROPS:
 @param: textColor ==> The color of the text
 @param: text ==> The text to be printed 
*/
const Header6 = (props) => {
  const headerClasses = classNames({
    [`text-[${props.textColor}]`]: props.textColor
  })

  return (
    <p className={`${ubuntu.className} text-xl ${headerClasses}`}>
      {props.text}
    </p>
  )
}

export default Header6
