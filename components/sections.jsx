import Image from 'next/image'
import Header1 from '@/components/Header1'
import Header5 from '@/components/Header5'
import Header6 from '@/components/Header6'
import Paragraph from '@/components/Paragraph'
import CurvedBackgroundOrange from './CurveBackgroundOrange'
import Header3 from './Header3'
import Header2 from './Header2'
import Header4 from './Header4'
import Contact from './Contact'
export default function Sections() {
  return (
    <>
      {/*First section of the landing page */}
      <div className='flex  flex-row  items-center justify-center gap-8'>
        <div>
          <div className='lg:flex hidden flex-row'> 
          <Image
            className=' relative -mt-6'
            src='/assets/logos/logo-naranja.png'
            alt='GuapoApp Logo'
            width={200}
            height={200}
          />
          </div>
          <article className=''>
            <Paragraph text='Sabemos que a imagen habla bien por ti. Somos una' />
            <Paragraph text='consultoria de imagen dedicada exclusivamente a' />
            <Paragraph text='hombre que desean proyectar seguridad, estio y' />
            <Paragraph text='elegancia en cada aspecto de su vida' />
          </article>
          <div
            className='items-center justify-center mt-8
              bg-primary-brownPod700 text-white pt-3 pl-2 pr-2 pb-2'
          >
            <Header5
              text='Tu mejor versión  COMIENZA AQUI'
              textColor='text-slate-50'
            />
          </div>
        </div>
        <div className='flex flex-row sm:flex-col relative mt-12'>
          <Image
            className='pt-5'
            src='/stock-image-7.jpg'
            alt='GuapoApp Logo'
            width={400}
            height={1000}
          />
          <div
            className='absolute -inset-y-8  
               left-20  pt-8  bg-orange-600'
          >
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
      <CurvedBackgroundOrange />
      <div
        className=' bg-orange-500 
                   mb-7 
                  '
      >
        <div
          className='flex flex-row items-center                 
                  justify-center gap-8'
        >
          <div className='justify-items-center'>
            <Paragraph text='Nuestro equipo de expertos esta aqui para' />
            <Paragraph text='asesorarte en el arte de vestir, ayudandote a definir' />
            <Paragraph text='un estilo que refleje tu personalidad y objetivos. Ya' />
            <Paragraph text='sea para destacar en el ámbito profesional, social o' />
            <Paragraph text='personal, te guiamos paso a paso a construir una' />
            <Paragraph text='una imagen que te haga sentir seguro y listo para' />
            <Paragraph text='conquistar cualquier reto' />
          </div>
          <div className='lg:flex hidden flex-row min-h-32 mt-2 '>
            <Image
              src='/sotck-image-2.jpg'
              alt='GuapoApp Logo'
              width={250}
              height={100}
            />
          </div>
        </div>
        <div
          className='lg:flex hidden flex-row bg-orange-700 border-orange-700 
     w-[55.4%] ml-60 text-orange-700 justify-items-center '
        >
          .
        </div>
      </div>

      {/*third section of landing page  */}
      <div className='grid grid-row  md:grid-col gap-2' >
        <div className='items-center justify-center flex flex-col mb-8 '>
        <div className='mt-8 mb-8'>
          <Header2
            text='¿Que incluye mi asesoria de imagen personalizada?'
            textColor='text-orange-600'
          />
        </div>

        <div className='lg:flex flex-row items-center sm:grid grid-cols-2   mt-3 gap-20 '>
          {/*First card */}
          <div className='items-center justify-center  bg-primary-brownPod950 pb-7
                     border-4 border-primary-brownPod950 '
          >
            <div className='w-38 pt-4 '>
              <Image
                className=''
                src='/assets/images/T1.jpg'
                alt='GuapoApp Logo'
                width={400}
                height={1000}
              />
            </div>

            <div className='bg-contrast-slateGray50 border-4 border-primary-brownPod950 w-full 
               grid justify-items-center'>
              <Header5 text='PROYECCION ' textColor='text-black' />
              <Header5 text='DE TU IMAGEN ' />
              <Paragraph text='Conocer cúal es la imagen que proyectas' />
              <Paragraph text='al exterior es importante para alcanzar' />
              <Paragraph text='tus objetivos. Te mostraremos como' />
              <Paragraph text='desde el minuto uno.' />
            </div>
          </div>

          {/*Second Card*/}
          <div className='items-center justify-center
                       bg-primary-brownPod950 pb-7
                     border-4 border-primary-brownPod950'
          >
            <div className='w-38  pt-4'>
              <Image
                className=''
                src='/assets/images/T2.jpg'
                alt='GuapoApp Logo'
                width={400}
                height={1000}
              />
            </div>
            
            <div className='bg-contrast-slateGray50 border-4 border-primary-brownPod950  
            grid justify-items-center'>
              <Header5 text='ASESORIA ' textColor='text-black' />
              <Header5 text='PERSONALIZADA ' />
              <Paragraph text='Adoptaremos tu imagen y tu estilo a tus ' />
              <Paragraph text='necesidades y objetivos a conseguir,' />
              <Paragraph text='respetando tu personalidad y lo que te ' />
              <Paragraph text='hace unico en cada momento' />
            </div>
          </div>
          {/*Third Card*/}
          <div className=' bg-primary-brownPod950 
                       border-4 border-primary-brownPod950 pb-7'
          >
            <div className='w-38 pt-4'>
              <Image
                className=''
                src='/assets/images/T3.jpg'
                alt='GuapoApp Logo'
                width={400}
                height={1000}
              />
            </div>

            <div className='  bg-contrast-slateGray50 border-4 border-primary-brownPod950 grid justify-items-center  '>
              <Header5 text='NOS VAMOS ' />
              <Header5 text='DE COMPRA' />
              <Paragraph text='Te enseñaremos a potenciar tu imagen' />
              <Paragraph text='mientras te diviertes. Te proponemos' />
              <Paragraph text='diferentes alternativas en una estudiada' />
              <Paragraph text='selección de tiendas' />
            </div>
          </div>
          {/*Fourth Card*/}
          <div className='lg:items-center justify-center  
                      border-4 border-primary-brownPod950 bg-primary-brownPod950 pb-7'
          >
            <div className='w-38 pt-4'>
              <Image
                className=''
                src='/assets/images/T4.jpg'
                alt='GuapoApp Logo'
                width={400}
                height={400}
              />
            </div>
            <div
              className='bg-contrast-slateGray50  border-4 border-primary-brownPod950 
             grid justify-items-center'
            >
              <Header5 text='ESTUDIO ' />
              <Header5 text='DE TU ROSTRO' />
              <Paragraph text='Definiremos el tipo de peinado, barba y' />
              <Paragraph text='óptica que más te favorecen segun tu ' />
              <Paragraph text='tipo de rostro. Te acompañamos al' />
              <Paragraph text='salón de de peluquería .' />
            </div>
          </div>
        </div>
      </div>
    </div>

      {/*Fourth section of landing page */}
      <div  className='items-center justify-center 
    flex flex-row gap-32' >
        <div>
          <div className='lg:flex hidden flex-row w-38 pt-4'>
            <Image
              className=''
              src='/assets/images/stock-image-14.jpeg'
              alt='GuapoApp Logo'
              width={400}
              height={1000}
            />
          </div>
        </div>
        <div className='items-center justify-center text-center'>
          <div >
            <Header2
              text='EXPERIENCIA'
              textColor='text-orange-800'
              textAlign='items-center justify-center'
            />
          </div>
         <div className=''>
          <Image
            className='ml-28'
            src='/assets/logos/logo-naranja.png'
            alt='GuapoApp Logo'
            width={200}
            height={200}
          />
          </div>
          <div>
            <Header2
              text='¿Nuevo Empleo?'
              textColor='text-orange-600'
              textAlign='items-center justify-center'
            />
          </div>
          <div className='mt-8'>
            <Header5
              text='Te ayudamos a definir el vestuario adecuado'
              textAlign='center'
            />
            <Header5 text='para tu nuevo puesto' textAlign='center' />
            <button className='mt-8 bg-primary-brownPod900 pt-3 pb-3 sm:mb-5 pl-3 pr-3 w-44 rounded-md'>
              {' '}
              <Header6 text='CONSULTANOS' textColor='text-slate-100' />{' '}
            </button>
          </div>
        </div>
      </div>

      {/* fifth section*/}

      <div className='lg:flex hidden flex-cols-6 gap-20 
        justify-center items-center 
        bg-primary-brownPod900
        mt-[100px]  h-[200px] w-[100%] rounded-t-[200%] sm:hidden'>
           <div className='bg-primary-brownPod600 p-3 items-center justify-center '>  
              <Header3 text="NUESTROS PLANES" textColor="text-primary-brownPod950" />               
          </div>
      </div>
{/* seccion de las columnas*/}
<div className='flex flex-cols-2 items-center  
          justify-center  gap-28 bg-primary-brownPod900'>
  {/* Columna izquierda*/}          
  <div className='border border-primary-brownPod600 p-5' >
     {/*Titulo */}{}
    <div className='bg-primary-brownPod800 text-center p-12'> 
      <Header3 text="Asesoria por evento" textColor= "text-contrast-slateGray100" />
      </div>
      {/*Contenido */}
    <div className='bg-primary-brownPod700 p-12'>
        <Paragraph text="Servicio de asesoría de imagen personal"
        textColor="text-contrast-slateGray100" textAlign="" />
        <Paragraph text="Analisis detallado de tu estilo" 
        textColor="text-contrast-slateGray100" textAlign="" />
        <Paragraph text="Recomendaciones personalizadas de tu vestimenta" 
        textColor="text-contrast-slateGray100" textAlign="" />
        <Paragraph text="Asesoramiento sobre el cuidado de la piel y el cabello" 
        textColor="text-contrast-slateGray100" textAlign="" />
        <Paragraph text="Consejos de cómo proyectar una imagen personal más segura"
         textColor="text-contrast-slateGray100" textAlign="" />        
        <Paragraph text="y mas atractiva" textColor="text-contrast-slateGray100" 
        textAlign="" />        

    </div>  
  </div>
  {/*Columna derecha */}
  <div className='border border-primary-brownPod600 p-5'> 
    {/*Titulo de la caja interna */}
      <div className='bg-primary-brownPod800 text-center p-12'> 
         <Header3 text="Plan Premium" textColor= "text-contrast-slateGray100" />
    </div>
    {/*Contenido de la caja interna */}
    <div className='bg-primary-brownPod700 text-justify p-12'>
        <Paragraph text="Servicio de asesoría de imagen personal" 
        textColor="text-contrast-slateGray100" textAlign="" />
        <Paragraph text="Analisis detallado de tu estilo"
         textColor="text-contrast-slateGray100" textAlign="" />
        <Paragraph text="Recomendaciones personalizadas de tu vestimenta"
         textColor="text-contrast-slateGray100" textAlign="" />
        <Paragraph text="Asesoramiento sobre el cuidado de la piel y el cabello" 
        textColor="text-contrast-slateGray100" textAlign="" />
        <Paragraph text="Consejos de cómo proyectar una imagen personal más segura"
         textColor="text-contrast-slateGray100" textAlign="" />
        <Paragraph text="y mas atractiva"
         textColor="text-contrast-slateGray100" textAlign="" />                
    </div>  
  </div>
</div>
<div className='bg-primary-brownPod900 text-center p-8'>
<Header3 text="Asesoría de imagen personal para potenciar" textColor= "text-contrast-slateGray100" />
<Header3 text="tu autopercepcion y estilo " textColor= "text-contrast-slateGray100" />
</div>

      {/*sixth section */}

      <div
        className='items-center justify-center
    flex flex-cols-2 bg-primary-brownPod50'
      >
        <div className='mr-3 '>
          <div className='flex flex-row mt-2 '>
            <Image
              className='mt-1 mr-12 rounded-full'
              src='/assets/images/stock-image-15.jpg'
              alt='GuapoApp Logo'
              width={80}
              height={80}
            />
            <div className=''> 
              <Header5 text='Jesus RODENAS' textColor='text-blue-600' />
              <Header6
                text='Hace 1 día'
                textColor='text-contrast-slateGray600'
              />
            </div>
          </div>
          <div className='mt-3'>
            <Header3 text='5.0 ' textColor='text-primary-brownPod600' />
          </div>
          <div className='mt-3 '>
            <Header4
              text='Servicio profesional que va mas'
              textColor='text-contrast-slateGray600'
            />
            <Header4
              text='alla de un simple asesoramiento de '
              textColor='text-contrast-slateGray600'
            />
            <Header4
              text='imagen basado en las tendencias. Te'
              textColor='text-contrast-slateGray600'
            />
            <Header4
              text='ayudan a definir tus objetivos en lo '
              textColor='text-contrast-slateGray600'
            />
            <Header4
              text='que imagen se refiere y su '
              textColor='text-contrast-slateGray600'
            />
            <Header4
              text='completisimo estudio te ayuda de'
              textColor='text-contrast-slateGray600'
            />
            <Header4
              text='forma determinante a conseguirlos.'
              textColor='text-contrast-slateGray600'
            />
            <Header4
              text='Experiencia del todo recomendable!'
              textColor='text-contrast-slateGray600'
            />
          </div>
        </div>
        <div className='lg:flex hidden flex-row'>
          <Image
            className='mt-1'
            src='/assets/images/stock-image-15.jpg'
            alt='GuapoApp Logo'
            width={700}
            height={600}
          />
        </div>
      </div>
      {/*sexta seccion de la pagina */}

      <div className='bg-primary-brownPod700 text-center p-16 items-center justify-center'>
        <Header1 text='Es tu momento' textColor='text-contrast-slateGray100' />
        <Header3
          text='Alcanza tus objetivos'
          textColor='text-contrast-slateGray100'
        />
        <br />
        <Header1
          text='Resultados inmediatos'
          textColor='text-primary-brownPod400'
        />
      </div>
      {/*Octava seccion de la pagina */}
      <div>
        <Contact />
      </div>
    </>
  )
}
