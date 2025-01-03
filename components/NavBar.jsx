import Image from 'next/image'
import Link from 'next/link'
import Header5 from './Header5'
import Header6 from './Header6'
export default function Navbar() {
  return (
    <>
         <nav className=''>
            <div className=' bg-primary-brownPod900 items-center justify-center
                  pr-6  pl-6 h-auto pt-4'>
            <ul className='flex items-center justify-center gap-20 '>       
                  <li><Link href='/'><Header6 text="INICIO" textColor="text-primary-brownPod600"/></Link></li>
                  <li> <Link href='/benefits'><Header6 text="BENEFICIOS" textColor="text-primary-brownPod600"/></Link></li>
                  <li> <Link href='/about'></Link></li>
                  <Image
                    className='relative -mt-9 mr-14'
                    src='/assets/logos/logo-blanco.png'
                    alt='GuapoApp Logo'
                    width={100}
                    height={100}
                 />

                  <li><Link href='/register'><Header6 text="UNETE AHORA" textColor="text-primary-brownPod600"/> </Link></li>
                  <li> <Link href='/login'><Header6 text="INICIAR SESION" textColor="text-primary-brownPod600"/></Link></li>
              </ul>
              </div>
              
              </nav>  
                   
    </>
  )
}
