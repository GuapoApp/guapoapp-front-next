import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <>
         
            <div className='flex flex-row bg-[#3E1800] h-2/3 justify-between 
                  pr-6  pl-6  pt-5 text-orange-500 mt-auto mb-auto'>
              
              <Link className='' href='/'>INICIO</Link>
              <Link href='/'>BENEFICIOS</Link>
              <Link href='/'>ACERCA DE</Link>
              <Image
                className='p-3'
                src='/logo-elegance-mix.svg'
                alt='GuapoApp Logo'
                width={110}
                height={110}
                
               />

              <Link href='/'>UNETE AHORA </Link>
              <Link href='/'>INICIAR SESION</Link>
              </div>
          

    </>
  )
}
