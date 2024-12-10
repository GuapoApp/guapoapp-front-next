import Image from 'next/image'
import Carrousel from './Carrousel'
import Link from 'next/link'
export default function Sections() {
 
  return (
    <><div>
      <section className='flex flex-rows-1 justify-center items-center'>      
      <div className='smallText'>Consultoria Especializada</div>      
      <div className='topText bt-8'>
            <p>¿ Cual es tu situacion antes </p>
            <p> de la asesoria?</p></div>
         <div className='buttonPosition'>
         <Link href=''>
              <button
                className='bg-orange-700 
               rounded-md w-40 h-8 text-gray-100'
              >
                ¡Unete ahora!
              </button>
              </Link>
         </div>
        <Image src='/Fondolanding.jpg' width={1440} height={438} alt='Logo' />
      </section>
      <div className='mt-8 mb-8'>
      <Carrousel />
      </div>
    
    <div className='flex flex-cols-2 items-center justify-center mt-12'>
      <div className='items-center justify-center'>
          <Image src='/wall.jpg' width={250} height={384} alt='Logo' />
      </div>
      <div className='bg-orange-600 w-96'>
        hola mundo
      </div>
    </div>

    
      <div className='flex flex-cols-2 bg-slate-200 items-center justify-center mb-2 h-auto'>
        <div><Image className='pt-5 pb-2' src='/wall.jpg' width={250} height={438} alt='Logo' /></div>
        <div className='bg-orange-600 w-auto mb-8 h-96 '>
          <div className='pl-8 text-2xl text-white '>
              <p >¿Estas listo para que le demos un vuelco de 180°</p>
              <p >a tu vida? no estas solo te acompañamos?</p>
           </div>
              <div className='text-ml text-white pt-6'>
                <div className=' pl-8 mb-8'>
                <ul>
                  <p> ¿Estas pasando por una etapa importante en </p>
                  <p> tu vida y sientes que es momento de </p>
                  <p> dedicarte a tu imagen personal?</p>
                </ul>
                </div>
                <div className='pl-8 mb-8'>
                <ul>
                  <p> ¿Estas pasando por una etapa importante en </p>
                  <p> tu vida y sientes que es momento de </p>
                  <p> dedicarte a tu imagen personal?</p>
                </ul>
                </div>
                <div className='pl-8 mb-8'>
                  <ul>
                  <p> ¿Estas pasando por una etapa importante en </p>
                  <p> tu vida y sientes que es momento de </p>
                  <p> dedicarte a tu imagen personal?</p>
                  </ul>
                </div>
                
              </div>


        </div>

    </div>




</div>  
    </>
  )
}
