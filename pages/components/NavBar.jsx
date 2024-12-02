import Image from "next/image"
export default function Navbar(){
  return(
    <>
           
      <nav >
        <div className="flex flex-cols-4 mt-8">
          
          <div className="flex flex-rows-1 gap-4 ml-24 pt-2">
            <div>
              <Image
                src="/landing.jpg"
                width={100}
                height={100}
                alt="Logo"
             /></div>
            <div>Consultoria de imagen</div>
          </div>

          <div className="flex flex-rows-1 gap-4 ml-32 pt-2">
            <div>Inicio</div>
            <div>Beneficios</div>
            <div>Acerca de </div>
          </div>

          <div className="flex flex-rows-1 gap-4 ml-72 pt-1">
            <div><button className="bg-orange-700 
               rounded-md w-40 h-8 text-gray-100">¡Unete ahora!</button></div>
            <div><button className="rounded-md border-solid
             border-2 border-black text-black w-40 h-8">Inicia sesion</button></div>
          </div>        
        </div>
                
      </nav>               
    </>
  )
}
