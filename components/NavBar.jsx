import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <>
         
            <div className='flex flex-row  bg-primary-brownPod900 justify-between 
                  pr-6  pl-6  pt-5 text-primary-brownPod600  '>
              
              <Link className='' href='/'>INICIO</Link>
              <Link href='/'>BENEFICIOS</Link>
              <Link href='/'>ACERCA DE</Link>
              <Image
                className='relative -mt-14'
                src='/assets/logos/logo-blanco.png'
                alt='GuapoApp Logo'
                width={150}
                height={150}
                
               />

              <Link href='/register'>UNETE AHORA </Link>
              <Link href='/login'>INICIAR SESION</Link>
              </div>
          

    </>
  )
}
