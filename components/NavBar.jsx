import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <>
         
            <div className='flex flex-cols-6  bg-primary-brownPod900   items-center justify-center
                  pr-6  pl-6  pt-5 gap-20 text-primary-brownPod600  '>
              
              <Link href='/'>INICIO</Link>
              <Link href='/benefits'>BENEFICIOS</Link>
              <Link href='/about'>ACERCA DE</Link>
              <Image
                className='relative -mt-10'
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
