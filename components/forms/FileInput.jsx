import { clsx } from 'clsx'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

const FileInput = (props) => {
  const fileInputClasses = clsx({
    [props.color]: props.color,
    [props.width]: props.width,
    'px-2': true,
    'py-3': true,
    'rounded-md': true,
    'text-xl': true,
    'font-semibold': true,
    'shadow-2xl': true,
    flex: true,
    'justify-center': true
  })

  const labelClasses = clsx({
    [props.textColor]: props.textColor
  })

  return (
    <div className={`${cabin.className} ${fileInputClasses}`}>
      <label htmlFor={props.id} className={`${labelClasses}`}>
        <input
          type='file'
          accept={props.accept}
          id={props.id}
          name={props.name}
          className='hidden'
        />
        {props.text}
      </label>
    </div>
  )
}

export default FileInput
