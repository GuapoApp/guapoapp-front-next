import DashboardMenu from '@/components/dashboards/DashboardMenu'
import DashboardTitleHeader from '@/components/dashboards/DashboardTitleHeader'
import Header5 from '@/components/Header5'
import PaymentMethodCard from '@/components/dashboards/PaymentMethodCard'
import FormSquareButton from '@/components/forms/FormSquareButton'
import SquareLink from '@/components/SquareLink'
import MainDashboardFrame from '@/components/dashboards/MainDashboardFrame'

import { jwtDecode } from 'jwt-decode'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const PaymentMethods = () => {
  const [role, setRole] = useState('')

  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setRole(decoded.Role)
    }
  }, [])

  const onSubmit = (data) => {
    console.log('Formulario enviado')
    console.log('Data:', data)
  }

  const goToAddNewPaymentMethod = (e) => {
    e.preventDefault()
    router.push(`/profesional/metodos-pago/agregar`)
  }

  return (
    <MainDashboardFrame footerColor='bg-primary-brownPod700'>
      {/* Menú */}
      <div className='w-2/6 flex flex-row h-full'>
        <DashboardMenu role={role} />
      </div>
      {/* Contenido */}
      <div className='w-4/6 flex flex-col gap-5'>
        {/* Header */}
        <div className='flex flex-row justify-end'>
          <div className='w-3/5 flex flex-row justify-end'>
            <DashboardTitleHeader
              title='MÉTODOS DE PAGO'
              squareColor='bg-primary-brownPod700'
              titleColor='text-primary-brownPod700'
            />
          </div>
        </div>
        {/* Title */}
        <div>
          <Header5
            text='Selecciona tu método de pago'
            textColor='text-primary-brownPod800'
          />
        </div>
        {/* Payment Methods */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7'>
          <div className='flex flex-col gap-3'>
            <div>
              <PaymentMethodCard
                bankAccountId='1'
                cardLastDigits='1234'
                cardName='Luis Robles Gómez'
                cardExpiration='03/28'
              />
            </div>
            <div>
              <PaymentMethodCard
                bankAccountId='1'
                cardLastDigits='1234'
                cardName='Luis Robles Gómez'
                cardExpiration='03/28'
              />
            </div>
            <div>
              <PaymentMethodCard
                bankAccountId='1'
                cardLastDigits='1234'
                cardName='Luis Robles Gómez'
                cardExpiration='03/28'
              />
            </div>
          </div>
          {/* Add Payment Method & Accept Buttons */}
          <div className='w-2/6'>
            <div className='flex flex-row gap-5 justify-center'>
              <FormSquareButton
                color='bg-primary-brownPod600'
                textColor='text-contrast-slateGray50'
                text='Aceptar'
                width='w-3/6'
              />
              <SquareLink
                color='bg-primary-brownPod600'
                textColor='text-contrast-slateGray50'
                text='Agregar tarjeta'
                width='w-3/6'
                onClick={goToAddNewPaymentMethod}
              />
            </div>
          </div>
        </form>
      </div>
    </MainDashboardFrame>
  )
}

export default PaymentMethods
