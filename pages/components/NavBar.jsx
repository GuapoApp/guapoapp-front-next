import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <>
      <nav className="navBarPosition flex justify-between items-center py-4">
        <div className='flex flex-cols-4'>
          <div className='flex flex-rows-1 gap-4 ml-16 pt-2'>
            <div>
              <Image src='/landing.jpg' width={100} height={100} alt='Logo' />
            </div>
            <div className='text-slate-50'>Consultoria de imagen</div>
          </div>

          <div className='flex flex-rows-1 gap-4 ml-32 pt-2'>
            <div className='text-slate-50'>Inicio</div>
            <div className='text-slate-50'>Beneficios</div>
            <div className='text-slate-50'>Acerca de </div>
          </div>

          <div className='flex flex-rows-1 gap-4 ml-72 pt-1'>
            <div> 
              <Link href=''>
              <button
                className='bg-orange-700 
               rounded-md w-40 h-8 text-gray-100'
              >
                ¡Unete ahora!
              </button>
              </Link>
            </div>
            <div>
              <Link href='/login'>
                  <button className='rounded-md border-solid
                    border-2 border-black text-black w-40 h-8'>                              
                    Inicia sesion
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
