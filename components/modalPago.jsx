import Image from "next/image"
import { useState } from "react"
import Header5 from "./Header5"
export default function ModalPago(props){
  const [isOpen, setisOpen] = useState(false)
  return(
    <>
     <div className="items-center justify-center text-center">
      <button className="bg-cyan-500 py-2 px-6 rounded-sm
       text-white font-bold m-5" onClick={()=>setisOpen(true)}>{props.button1}</button>
       </div>
       {
       isOpen &&(        
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex 
                             justify-center text-center items-center">          
            <div className="bg-contrast-slateGray100 bg-opacity-30 w-[40%] rouded flex flex-col 
                  justify-center items-center gap-5">
                 <div className="flex justify-center rounded-t-lg w-full bg-primary-brownPod950
                   items-center">
                    <Image
                      className='relative -mt-6'
                      src='/assets/logos/logo-blanco.png'
                      alt='GuapoApp Logo'
                      width={150}
                      height={150}                        
                      />                     
                  </div>
                <div className="flex flex-col text-center p-2 ">
                  <Header5 text="PAGO EXITOSO" textColor="text-primary-brownPod950"/>
                  <Header5 text="Tu asesoría ha quedado agendada, espera " textColor="text-primary-brownPod950" />
                  <Header5 text="para la confirmación de tu asesor" textColor="text-primary-brownPod950" /> 
                  <Header5 text="para la sesión." textColor="text-primary-brownPod950" />           
                 <button className="bg-primary-brownPod600 w-24 h-12  rounded-sm
             text-white font-bold ml-[40%] m-5" onClick={()=>setisOpen(false)}>Aceptar</button>
             
     </div>         
    </div>
  </div>              
)}
</>      
)}