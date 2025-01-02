import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * PROPS:
 @param: role ==> The role of the user
 */

const DashboardMenu = (props) => {
  const router = useRouter()

  const signOut = (event) => {
    event.preventDefault()
    localStorage.removeItem('token')
    router.push('/')
  }

  if (props.role === 'PROFESSIONAL') {
    return (
      <div className='flex flex-col bg-primary-brownPod700 gap-7 p-7 mt-auto mb-auto h-[80%] text-primary-brownPod500 font-semibold z-20 text-xl'>
        <Link href='/profesional/perfil'>MI PERFIL</Link>
        <Link href='/profesional/asesores'>MIS ASESORES</Link>
        <Link href='/profesional/expediente'>MI EXPEDIENTE</Link>
        <Link href='/profesional/agenda'>AGENDA</Link>
        <Link href='/profesional/metodos-pago'>METODOS DE PAGO</Link>
        <Link href='/' className='text-right' onClick={signOut}>
          Cerrar Sesión
        </Link>
      </div>
    )
  }

  if (props.role === 'CONSULTANT') {
    return (
      <div className='flex flex-col bg-primary-brownPod700 gap-7 p-7 mt-auto mb-auto h-[97%] text-primary-brownPod500 font-semibold z-20 text-xl'>
        <Link href='/'>MI PERFIL</Link>
        <Link href='/'>MIS ASESORESADOS</Link>
        <Link href='/'>MIS RESEÑAS</Link>
        <Link href='/'>AGENDA</Link>
        <Link href='/'>CUENTAS BANCARIAS</Link>
        <Link href='/' className='text-right' onClick={signOut}>
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
        <Link href='/' className='text-right' onClick={signOut}>
          Cerrar Sesión
        </Link>
      </div>
    )
  }
}

export default DashboardMenu
