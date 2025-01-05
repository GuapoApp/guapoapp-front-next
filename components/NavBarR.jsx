import Image from "next/image"

export default function NavbarR(){
    return(
        <>
           <nav className=" bg-primary-brownPod900 sm:flex sm:items-center sm:justify-between">
             <section className=" pt-3 flex justify-between">
               <Image
                className='relative -mt-8 '
                src='/assets/logos/logo-blanco.png'
                alt='GuapoApp Logo'
                width={100}
                height={100}
                />
            <button className="text-gray-700 sm:hidden">
                  <Image
                    className='relative '
                    src='/assets/images/menu.png'
                    alt='GuapoApp Logo'
                    width={30}
                    height={30}
                 /> 
            </button>

             </section>
            <div className="flex flex-col items-start mt-3 mb-3 gap-1 sm:flex-row sm:m-0 ">
                <button className="text-gray-600 hover:bg-gray-700
                 hover:text-gray-900 w-auto 
                 text-left px-2 rounded-md">INICIO</button>
                <button className="text-gray-600 hover:bg-gray-700
                 hover:text-gray-900 w-auto
                 text-left px-2 rounded-md"> UNETE AHORA</button>
                <button className="text-gray-600 hover:bg-gray-700 hover:text-gray-900 
                w-auto text-left px-2 rounded-md">INICIAR SESION</button>

            </div>


           </nav>
        </>

    )
}