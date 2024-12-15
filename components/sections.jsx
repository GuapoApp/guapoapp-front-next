import Image from 'next/image'
import Header1 from '@/components/Header1'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import CurvedBackgroundOrange from './CurveBackgroundOrange'
import Header3 from './Header3'
import Header2 from './Header2'
import Header4 from './Header4'
export default function Sections() {
 
  return (
    <>
    {/*First section of the landing page */}
    <div className='flex flex-row items-center justify-center gap-8'>
      <div>
        <Header1 text="GuapoApp"/>
        <div className='ml-16 mb-8'>
          <Header6 text="Consultoria de imagen"/>
        </div>
         
       <article className=''>
              <Paragraph text="Sabemos que a imagen habla bien por ti. Somos una"/>
              <Paragraph text="consultoria de imagen dedicada exclusivamente a"/>
              <Paragraph text="hombre que desean proyectar seguridad, estio y"/>
              <Paragraph text="elegancia en cada aspecto de su vida"/>        
        </article>
        <div className='items-center justify-center mt-8
             text-slate-50 bg-orange-700 pt-3 pl-2 pr-2 pb-2'>
            <Header5 text="Tu mejor versión  COMIENZA AQUI"/>
        </div>
      </div>
      <div className='flex flex-row relative mt-12'>
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
  <CurvedBackgroundOrange/>
  <div className=' bg-orange-500 
                   mb-7 
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
     w-[55.4%] ml-60 text-orange-700 justify-items-center flex flex-row'>.</div>
  </div>

{/*third section of landing page  */}
<div className='items-center justify-center flex flex-col mb-8 '>
  <div className='text-orange-500 mt-8 mb-8'>
      <Header5 text="¿Que incluye mi asesoria de imagen personalizada?"/>
 </div> 

   <div className='flex flex-row items-center  mt-3 gap-20 '>
      {/*First card */}
      <div className='items-center justify-center  bg-orange-950 pb-7
                     border-4 border-orange-950 '>
            <div className='w-38 pt-4 '>
            <Image
                className=''
                src='/assets/images/T1.jpg'
                alt='GuapoApp Logo'
                width={400}
                height={1000}            
               />

            </div> 
          
          <div className='bg-contrast-slateGray50 border-4 border-orange-950 w-full  grid justify-items-center'>
              <Header5 text="PROYECCION " textColor ="text-orange-500"/>
              <Header5 text="DE TU IMAGEN "/>
              <Paragraph text="Conocer cúal es la imagen que proyectas" />
              <Paragraph text="al exterior es importante para alcanzar" />
              <Paragraph text="tus objetivos. Te mostraremos como" />
              <Paragraph text="desde el minuto uno." />
           </div>
      </div>

      {/*Second Card*/}
      <div className='items-center justify-center
                       bg-orange-950 pb-7
                     border-4 border-orange-950'>
            <div className='w-38  pt-4'>
            <Image
                className=''
                src='/assets/images/T2.jpg'
                alt='GuapoApp Logo'
                width={400}
                height={1000}            
               />
            </div>
            <div>

            </div>
           <div className='bg-contrast-slateGray50 border-4 border-orange-950  grid justify-items-center'>
              <Header5 text="ASESORIA " textColor ="text-orange-500"/>
              <Header5 text="PERSONALIZADA "/>
              <Paragraph text="Adoptaremos tu imagen y tu estilo a tus " />
              <Paragraph text="necesidades y objetivos a conseguir," />
              <Paragraph text="respetando tu personalidad y lo que te " />
              <Paragraph text="hace unico en cada momento" />             
           </div>
      </div>
      {/*Third Card*/}
      <div className='items-center justify-center bg-primary-brownPod950
                      border-4 border-orange-950 pb-7'>
          <div className='w-38 pt-4'>
          <Image
                className=''
                src='/assets/images/T3.jpg'
                alt='GuapoApp Logo'
                width={400}
                height={1000}            
               />
          </div>
        
         <div className='bg-contrast-slateGray50 border-4 border-orange-950 '>
              <Header5 text="NOS VAMOS "/>
              <Header5 text="DE COMPRA"/>
              <Paragraph text="Te enseñaremos a potenciar tu imagen" />
              <Paragraph text="mientras te diviertes. Te proponemos" />
              <Paragraph text="diferentes alternativas en una estudiada" />
              <Paragraph text="selección de tiendas" />    
          </div>        
      </div>
      {/*Fourth Card*/}
      <div className='items-center justify-center 
                      border-4 border-orange-950 bg-primary-brownPod950 pb-7'>
          <div className='w-38 pt-4'>
          <Image
                className=''
                src='/assets/images/T4.jpg'
                alt='GuapoApp Logo'
                width={400}
                height={400}            
               />
          </div>
          <div className='bg-contrast-slateGray50 border-4 border-orange-950 
             grid justify-items-center'>
              
              <Header5 text="ESTUDIO "/>
              <Header5 text="DE TU ROSTRO"/>
              <Paragraph text="Definiremos el tipo de peinado, barba y" />
              <Paragraph text="óptica que más te favorecen segun tu " />
              <Paragraph text="tipo de rostro. Te acompañamos al" />
              <Paragraph text="salón de de peluquería ." />
          </div>
      </div>
   </div>
</div>
{/*Fourth section of landing page */}
 
 <div className='flex flex-row gap-8 bg-primary-brownPod100 
 items-center justify-center'>
    <div className='flex flex-row' >
         espacio en blanco
         <div className=' bg-primary-brownPod500 pt-10 h-auto'>
         <Image
                className='h-auto'
                src='/assets/images/stock-image-6.jpg'
                alt='GuapoApp Logo'
                width={300}
                height={800}            
               />               
         </div>
    </div>

    <div > 
        <div>EXPERIENCIA</div>
            <div>GuapoApp</div>
            <div>¿Nuevo empleo?</div>
        <div>
            <p>Te ayudamos a definir el nuevo vestuario</p>
            <p>para tu nuevo puesto</p>
        </div>
     </div>
 </div>
 
 
 {/*Fifth section of landing page */}
 <Image
                className=''
                src='/assets/images/stock-image-6.jpg'
                alt='GuapoApp Logo'
                width={300}
                height={800}            
               />               
 
                        
 {/**/}   
    </>
  )
}
