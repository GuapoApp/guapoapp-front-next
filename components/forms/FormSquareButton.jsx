import { clsx } from 'clsx'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

/**
 * PROPS:
 * @param: color - The color of the button
 * @param: textColor - The color of the text
 * @param: width - The width of the button
 * @param: text - The text to be displayed
 */

const FormSquareButton = (props) => {
  const buttonClasses = clsx({
    [props.color]: props.color,
    [props.textColor]: props.textColor,
    [props.width]: props.width,
    'px-2': true,
    'py-3': true,
    'rounded-md': true,
    'text-xl': true,
    'font-semibold': true,
    'shadow-2xl': true
  })

  return (
    <button className={`${cabin.className} ${buttonClasses}`}>
      {props.text}
    </button>
  )
}

export default FormSquareButton
