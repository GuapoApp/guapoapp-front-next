import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import CurvedBackground from '@/components/CurvedBackground'

import { jwtDecode } from 'jwt-decode'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ProfessionalDashboard = () => {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const decoded = jwtDecode(localStorage.token)
    if (decoded) {
      setUserName(decoded.Name)
    }
  }, [])

  return (
    <main className='box-content bg-contrast-slateGray50 min-h-screen w-full flex flex-col'>
      {/* Navbar */}
      <div className='bg-primary-brownPod800 w-full flex flex-row justify-center'>
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
      <div className=''>
        {/* Menu y sección izquierda */}
        <section className='flex flex-col align-middle justify-start absolute'>
          {/* Sección superior */}
          <div className='flex flex-row p-5 flex flex-row'>
            {/* Menú */}
            <div className='flex flex-col bg-[#BC5901] h-2/3 gap-3 p-5 mt-auto mb-auto z-50 relative -top-4 text-[#FEAA00] font-semibold'>
              <Link href='/'>MI PERFIL</Link>
              <Link href='/'>MIS ASESORES</Link>
              <Link href='/'>MI EXPEDIENTE</Link>
              <Link href='/'>AGENDA</Link>
              <Link href='/'>METODOS DE PAGO</Link>
              <Link href='/' className='text-right'>
                Cerrar Sesión
              </Link>
            </div>
            {/* Foto de Perfil */}
            <div>
              {/* Foto */}
              <Image
                className='p-2 rounded-tr-[70px] border-2 border-[#BC5901]'
                src='/assets/images/stock-image-1.jpeg'
                width={200}
                height={400}
              />
              {/* Rectangulo superpuesto */}
              <div className='bg-[#BC5901] w-20 h-10 relative left-[114px] -top-5'></div>
            </div>
          </div>
          {/* Sección inferior, Bienvenida y nombre */}
          <div className='m-auto flex flex-col '>
            <Header4 text='BIENVENIDO' textColor='#974508' />
            <Header5 text={`${userName},`} textColor='#974508' />
          </div>
        </section>
        {/* Agenda y proximas citas sección izquierda */}
        <section></section>
      </div>
      {/* Footer, lleva la curvatura */}
      <div className='h-24 absolute -bottom-0 w-full h-7'>
        <CurvedBackground />
      </div>
    </main>
  )
}
export default ProfessionalDashboard
