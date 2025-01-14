
import AlertModal from '@/components/AlertModal'

export default function Mision() {
  return (
    <AlertModal
      title='ERROR EN PAGO'
      text='Tu pago fue rechazado o hubo un error favor de reintentar o seleccionar otro metodo de pago'
      button1='Cambiar metodo de pago'
    />
  )
}
