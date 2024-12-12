import Image from 'next/image'
import Carrousel from './Carrousel'
import Link from 'next/link'
import Navbar from './NavBar'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
export default function Sections() {
 
  return (
    <>
    {/*First section of the landing page */}
    <div className='flex flex-row items-center justify-center gap-8'>
      <div>
        <p> <Header1 text="GuapoApp"/></p>
        <p> <Header6 text="Consultoria de imagen"/></p>
       <article className='text-balance'>
          <p> 
              <p>Sabemos que a imagen habla bien por ti. Somos una</p>
              <p>consultoria de imagen dedicada exclusivamente a </p>
              <p>hombre que desean proyectar seguridad, estio y</p>
              <p>elegancia en cada aspecto de su vida</p>
          </p>
        </article>
      </div>
      <div>
          <Header2 text="Imagen 1 " />
          <Header3 text="Imagen 2 " />
      </div>
    </div>
  {/* second section of landing page*/}
  <div className='flex flex-row items-center 
                  
                  justify-center gap-8'>
    <div>
      <p>Nuestro equipo de expertos esta aqui para </p>
      <p>asesorarte en el arte de vestir, ayudandote a definir</p>
      <p>un eilo que refleje tu personalidad y objetivos. Ya</p>
      <p>sea para destacar en el ámbito profesional, social o</p>
      <p>personal, te guiamos paso a paso a construir una</p>
      <p>una imagen que te haga sentir seguro y listo para</p>
      <p>conquistar cualquier reto</p>
    </div>
    <div>
    <Header2 text="Imagen 1 " />

    </div>
  </div>

    
    </>
  )
}
