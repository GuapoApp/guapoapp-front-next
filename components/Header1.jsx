import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: '500' })

/**
 * TODO: Add variable for text color from props
 */
/** 
 @param: text ==> The text to be printed 
*/
const Header1 = (props) => {
  return <p className={`${ubuntu.className} text-6xl`}>{props.text}</p>
}

export default Header1
