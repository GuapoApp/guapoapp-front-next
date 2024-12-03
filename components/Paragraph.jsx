import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

/**
 * TODO: Add variable for text color from props
 */
/** 
 @param: text ==> The text to be printed 
*/
const Paragraph = (props) => {
  return <p className={`${cabin.className} text-base`}>{props.text}</p>
}

export default Paragraph
