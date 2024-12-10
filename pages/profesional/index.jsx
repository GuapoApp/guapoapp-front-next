import Header1 from '@/components/Header1'
import Image from 'next/image'
import Link from 'next/link'

const ProfessionalDashboard = () => {
  return (
    <main className='box-content bg-[#F8FAFC] min-h-screen w-full flex flex-col'>
      {/* Navbar */}
      <div className='bg-[#984508] w-full border-black flex flex-row justify-center'>
        <Image
          className='p-3'
          src='/logo-elegance-mix.svg'
          alt='GuapoApp Logo'
          width={110}
          height={110}
          priority
        />
      </div>
      {/* Principal */}
      <div className='border-black'>
        {/* Menu y sección izquierda */}
        <section className='flex flex-col align-middle justify-start'>
          {/* Sección superior */}
          <div className='border border-black flex flex-row p-5 flex flex-row'>
            {/* Menú */}
            <div className='flex flex-col bg-[#BC5901] h-2/3 gap-3 pt-5 pl-5 mt-auto mb-auto'>
              <Link href='/'>MI PERFIL</Link>
              <Link href='/'>MIS ASESORES</Link>
              <Link href='/'>MI EXPEDIENTE</Link>
              <Link href='/'>AGENDA</Link>
              <Link href='/'>METODOS DE PAGO</Link>
              <Link href='/'>Cerrar Sesión</Link>
            </div>
            {/* Foto de Perfil */}
            <div>
              {/* Foto */}
              <div className='border border-[#BC5901] rounded-tr-[70px]'>
                <Image
                  className='p-2 rounded-tr-[70px]'
                  src='/assets/images/stock-image-1.jpeg'
                  width={200}
                  height={400}
                />
              </div>
              {/* Rectangulo superpuesto */}
              <div></div>
            </div>
          </div>
          {/* Sección inferior, Bienvenida y nombre */}
          <div></div>
        </section>
        {/* Agenda y proximas citas sección izquierda */}
        <section></section>
      </div>
      {/* Footer, lleva la curvatura */}
      <div className='border-black'></div>
    </main>
  )
}
export default ProfessionalDashboard
