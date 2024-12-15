import Link from 'next/link'

/**
 * PROPS:
 @param: role ==> The role of the user
 */

const DashboardMenu = (props) => {
  if (props.role === 'PROFESSIONAL') {
    return (
      <div className='flex flex-col bg-primary-brownPod700 gap-7 p-7 mt-auto mb-auto h-[80%] text-primary-brownPod500 font-semibold z-20 text-xl'>
        <Link href='/'>MI PERFIL</Link>
        <Link href='/'>MIS ASESORES</Link>
        <Link href='/'>MI EXPEDIENTE</Link>
        <Link href='/'>AGENDA</Link>
        <Link href='/'>METODOS DE PAGO</Link>
        <Link href='/' className='text-right'>
          Cerrar Sesión
        </Link>
      </div>
    )
  }

  if (props.role === 'CONSULTANT') {
    return (
      <div className='flex flex-col bg-primary-brownPod700 gap-7 p-7 mt-auto mb-auto h-[80%] text-primary-brownPod500 font-semibold z-20 text-xl'>
        <Link href='/'>MI PERFIL</Link>
        <Link href='/'>MIS ASESORESADOS</Link>
        <Link href='/'>MIS RESEÑAS</Link>
        <Link href='/'>AGENDA</Link>
        <Link href='/'>CUENTAS BANCARIAS</Link>
        <Link href='/' className='text-right'>
          Cerrar Sesión
        </Link>
      </div>
    )
  }

  if (props.role === 'ADMIN') {
    return (
      <div className='flex flex-col bg-primary-brownPod700 gap-7 p-7 mt-auto mb-auto h-[80%] text-primary-brownPod500 font-semibold z-20 text-xl'>
        <Link href='/'>MI PERFIL</Link>
        <Link href='/'>ADMIN</Link>
        <Link href='/' className='text-right'>
          Cerrar Sesión
        </Link>
      </div>
    )
  }
}

export default DashboardMenu
