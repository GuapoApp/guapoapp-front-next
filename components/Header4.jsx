import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })

/**
 * TODO: Add variable for text color from props
 */
/** 
 @param: text ==> The text to be printed 
*/
const Header4 = (props) => {
  return <p className={`${ubuntu.className} text-3xl`}>{props.text}</p>
}

export default Header4
