import { clsx } from 'clsx'

import Link from 'next/link'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

/**
 * PROPS:
 @param: color - The color of the button
 @param: textColor - The color of the text
 @param: width - The width of the button
 @param: text - The text to be displayed
 @param: onClick - The function to be executed when the button is clicked
 */

const SquareLink = (props) => {
  const buttonClasses = clsx({
    [props.color]: props.color,
    [props.textColor]: props.textColor,
    [props.width]: props.width,
    'px-2': true,
    'py-3': true,
    'rounded-md': true,
    'text-xl': true,
    'font-semibold': true,
    'shadow-xl': true,
    'text-center': true,
    'cursor-pointer': true
  })

  return (
    <div
      className={`${cabin.className} ${buttonClasses}`}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  )
}
export default SquareLink
