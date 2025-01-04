import Image from 'next/image'
import Link from 'next/link'
import Header5 from './Header5'
import Header6 from './Header6'
export default function Navbar() {
  return (
    <>
         <nav className=''>
            <div className=' bg-primary-brownPod900 lg:items-center justify-center
                  pr-6  pl-6 h-auto '>
                    
            <ul className='flex items-center h-fit justify-center gap-20 '>     
                 <li className='pt-8'>
              
                 <Image
                    className='relative lg:-mt-8'
                    src='/assets/logos/logo-blanco.png'
                    alt='GuapoApp Logo'
                    width={100}
                    height={100}
                 />                 
                  </li>  
                 <div className='lg:hidden' id=''>    
                  <Image
                    className='relative lg:-mt-8'
                    src='/assets/images/menu.png'
                    alt='GuapoApp Logo'
                    width={40}
                    height={40}
                 /> 
                 </div>
                 
                  <li><Link href='/'><Header6 text="INICIO" textColor="text-primary-brownPod600"/></Link></li>
                  <li><Link href='/register'><Header6 text="UNETE AHORA" textColor="text-primary-brownPod600"/> </Link></li>
                  <li> <Link href='/login'><Header6 text="INICIAR SESION" textColor="text-primary-brownPod600"/></Link></li>
              </ul>
              </div>
              
              </nav>  
                   
    </>
  )
}
