import { clsx } from 'clsx'
import Image from 'next/image'

import { useForm } from 'react-hook-form'

import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] })

const IconInput = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  const inputDivClasses = clsx({
    'w-full': true,
    'p-3': true,
    'text-contrast-slateGray500': true,
    'rounded-md': true,
    // 'text-xl': true,
    'bg-contrast-slateGray300': true,
    flex: true,
    'flex-row': true,
    'items-center': true
  })

  const inputClasses = clsx({
    'w-full': true,
    // 'p-3': true,
    'text-contrast-slateGray500': true,
    // 'rounded-md': true,
    'text-xl': true,
    'bg-contrast-slateGray300': true,
    'focus:outline-none': true
    // flex: true,
    // 'flex-row': true,
    // 'items-center': true
  })

  return (
    <div className={`${cabin.className} ${inputDivClasses}`}>
      <input
        className={`${inputClasses}`}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        id={props.id}
        {...register(props.register)}
      />
      <div className='relative w-10 h-10 flex items-center justify-center'>
        <Image
          alt=''
          src={props.source}
          layout='fill'
          className='w-10 h-10 flex items-center justify-center'
        />
      </div>
    </div>
  )
}

export default IconInput
