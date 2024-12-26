import Paragraph from '../Paragraph'

import { useForm } from 'react-hook-form'

const PaymentMethodCard = (props) => {
  const { register } = useForm()

  return (
    <div className='flex flex-col gap-2'>
      <article className='w-2/5 h-32 border border-secondary-satinLinen100 shadow-lg p-5 rounded-md flex flex-row gap-10'>
        <input
          className={``}
          type='radio'
          name='bankAccount'
          // id='role'
          value={props.bankAccountId}
          {...register('bankAccount')}
        />
        <label className='w-full' htmlFor='bankAccount'>
          <Paragraph
            text={`**** ${props.cardLastDigits}`}
            textColor='text-contrast-slateGray500'
          />
          <Paragraph
            text={props.cardName}
            textColor='text-contrast-slateGray500'
          />
          <Paragraph
            text={`Vence el ${props.cardExpiration}`}
            textColor='text-contrast-slateGray500'
          />
        </label>
      </article>
    </div>
  )
}

export default PaymentMethodCard
