import classNames from 'classnames'

import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })

/** 
 * PROPS:
 @param: text ==> The text to be printed 
 @param: textColor ==> The color of the text
*/
const Header2 = (props) => {
  const headerClasses = classNames({
    [`text-[${props.textColor}]`]: props.textColor
  })

  return (
    <h2 className={`${ubuntu.className} text-5xl ${headerClasses}`}>
      {props.text}
    </h2>
  )
}

export default Header2
