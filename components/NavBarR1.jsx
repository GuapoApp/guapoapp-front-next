import Image from "next/image"
import Link from "next/link"
import OpenMenu from "./OpenMenu"
import Header6 from "./Header6"


export default function NavbarR1(){

    return(
      <>
        <nav className="bg-primary-brownPod900 relative">
            <div className="container mx-auto flex px-8 xl:px-0">
            
            <div className="flex flex-grow items-center">
            <Image
                className=' '
                src='/assets/logos/logo-blanco.png'
                alt='GuapoApp Logo'
                width={100}
                height={100}
                />
            </div>
            <div className="mt-8 lg:hidden  " onClick={OpenMenu}>
              <Image
                className=''
                src='/assets/images/menu.png'
                alt='GuapoApp Logo'
                width={30}
                height={30}
            />
            </div>
                                    
            <div id="menu" className="lg:flex hidden 
                flex-grow justify-between absolute             
                lg:relative lg:top-0 top-20 left-0
              bg-primary-brownPod900 items-center lg:w-auto" >
               <div className="flex flex-col lg:flex-col md:flex-row mb-8 lg:mb-0  ">
                  <Link className="text-black lg:mr-7  mb-2 lg:mb-0" href="/"><Header6 text="INICIO" textColor="text-primary-brownPod600"/></Link>
                  <Link className="text-black lg:mr-7  mb-2 lg:mb-0" href="/register"><Header6 text="UNETE AHORA" textColor="text-primary-brownPod600"/> </Link>
                  <Link className="text-black lg:mr-7  mb-0 lg:mb-0" href="login"><Header6 text="INICIAR SESION" textColor="text-primary-brownPod600"/> </Link>   
              </div>              
           </div>
        </div>    
        </nav>
         
      </>
    )
}