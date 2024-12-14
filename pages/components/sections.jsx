import Image from 'next/image'
import Carrousel from './Carrousel'
import Link from 'next/link'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Header4 from '@/components/Header4'
import Paragraph from '@/components/Paragraph'
export default function Sections() {
 
  return (
    <>
    {/*First section of the landing page */}
    <div className='flex flex-row items-center justify-center gap-8'>
      <div>
        <p> <Header1 text="GuapoApp"/></p>
        <p> <Header6 text="Consultoria de imagen"/></p>
       <article className=''>
              <Paragraph text="Sabemos que a imagen habla bien por ti. Somos una"/>
              <Paragraph text="consultoria de imagen dedicada exclusivamente a"/>
              <Paragraph text="hombre que desean proyectar seguridad, estio y"/>
              <Paragraph text="elegancia en cada aspecto de su vida"/>        
        </article>
      </div>
      <div className='flex flex-row relative mt-8'>
             <Image
                className=''
                src='/stock-image-7.jpg'
                alt='GuapoApp Logo'
                width={400}
                height={1000}            
               />
               <div className='absolute -inset-y-8  
               left-20  pt-8  bg-orange-600'>
             <Image
                className='h-full'
                src='/stock-image-8.jpg'
                alt='GuapoApp Logo'
                width={250}
                height={2000}
                
               />
               </div>
      </div>
    </div>
  {/* second section of landing page*/}
  <div className=' bg-orange-500 
                  mt-16 mb-7
                  '>
    <div className='flex flex-row items-center                 
                  justify-center gap-8'>
    <div className='justify-items-center'>
      <Paragraph text="Nuestro equipo de expertos esta aqui para" />
      <Paragraph text="asesorarte en el arte de vestir, ayudandote a definir" />
      <Paragraph text="un estilo que refleje tu personalidad y objetivos. Ya" />
      <Paragraph text="sea para destacar en el ámbito profesional, social o" />
      <Paragraph text="personal, te guiamos paso a paso a construir una" />
      <Paragraph text="una imagen que te haga sentir seguro y listo para" />
      <Paragraph text="conquistar cualquier reto" />
    </div>
    <div className='flex flex-row min-h-32 mt-2'>
      <Image
       src='/sotck-image-2.jpg'
       alt='GuapoApp Logo'
       width={250}
       height={100}/>
      
    </div>
    </div>
    <div className='bg-orange-700 border-orange-700 
     w-[55.8%] ml-60  justify-items-center '>. </div>
  </div>

{/*third section of landing page  */}
<div className='items-center justify-center flex flex-col mb-8'>
  <div>
      <Header5 text="¿Que incluye mi asesoria de imagen personalizada?"/>
 </div>  
   <div className='flex flex-row items-center justify-center mt-3 gap-20 '>
      <div className='items-center justify-center
                     border-4 border-orange-700'>
           <Header5 text="PROYECCION " textColor ="text-orange-500"/>
           <Header5 text="DE TU IMAGEN "/>      
      </div>
      <div className='items-center justify-center
                      border-4 border-orange-700'>
           <Header5 text="ASESORIA "/>
           <Header5 text="PERSONALIZADA "/>
      </div>
      <div className='items-center justify-center
                      border-4 border-orange-700'>
        <Header5 text="NOS VAMOS "/>
        <Header5 text="DE COMPRA"/>
        
      </div>
      <div className='items-center justify-center 
                      border-4 border-orange-700'>
        <Header5 text="ESTUDIO "/>
        <Header5 text="DE TU ROSTRO"/>
      </div>
   </div>
</div>
{/*Fourth section of landing page */}


{/*Fifth section of landing page */}

    
    </>
  )
}
