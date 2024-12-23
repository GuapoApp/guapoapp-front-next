import { clsx } from 'clsx'

import Link from 'next/link'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

const SquareButton = (props) => {
  const buttonClasses = clsx({
    [props.color]: props.color,
    [props.textColor]: props.textColor,
    [props.width]: props.width,
    'px-2': true,
    'py-3': true,
    'rounded-md': true,
    'text-xl': true,
    'font-semibold': true,
    'shadow-2xl': true,
    'text-center': true
  })

  return (
    <div className={`${cabin.className} ${buttonClasses}`}>
      <Link href={props.href}>{props.text}</Link>
    </div>
  )
}
export default SquareButton
