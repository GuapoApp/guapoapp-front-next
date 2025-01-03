import { useState } from "react"
import Header5 from "./Header5"
import SquareLink from "./SquareLink"
import Paragraph from "./Paragraph"


export default function ModalCard(props){
  const [isOpen, setisOpen] = useState(false)
  return(
    <>
    {/* <div className="items-center justify-center text-center">
      <button className="bg-cyan-500 py-2 px-6 rounded-sm
       text-white font-bold m-5" onClick={()=>setisOpen(true)}>{props.button1}</button>
       </div>*/}
{
!isOpen &&(        

    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex 
                             justify-center text-center items-center">          
        <div className="bg-white  w-[40%] rouded flex flex-col 
                  justify-center items-center gap-5">
             <div className="flex flex-col items-center text-center gap-2 p-2 ">
                  <Header5 text={props.title} textColor="text-primary-brownPod800"/> 
                  <form action="" method="post">
                  <div className="flex flex-col gap-3 items-start">
                      {/*Captura del nombre*/}
                        <label htmlFor="">
                            <Paragraph text="Nombre en la tarjeta" textColor="text-contrast-slateGray500" />
                         </label>
                         <input className="bg-contrast-slateGray200 border-2 h-10 p-2 rounded-sm"
                          placeholder="Escribe tu nombre" type="text" size="40" name="" id="" />
                         {/*Captura de los datos de la tarjeta*/}
                         <label htmlFor="">
                            <Paragraph text="Numero de la tarjeta" textColor="text-contrast-slateGray500" />
                         </label>
                         <input className="bg-contrast-slateGray200 h-10 p-2 border-2 rounded-sm" 
                         placeholder="XXXX XXXX XXXX XXXX" type="text" size="40"
                         name="" id="" />
                            {/*Etiquetas de del apartado de la fecha de vencimiento */}
                         <div className="flex flex-row ml-8 justify-center  text-center">                        
                            <label className="" htmlFor="">
                                <Paragraph text="Fecha de expiracion" textColor="text-contrast-slateGray500" />
                            </label>
                            <label className=" ml-10" htmlFor="">
                                <Paragraph text="CVV" textColor="text-contrast-slateGray500" textAlign="text-center" />
                            </label>                            
                         </div>
                         {/*Seccion de los inputs de fecha y CVV */}
                         <div className="items-center mb-4">
                            <input className="border-2 p-2 h-10 ml-8 bg-contrast-slateGray200" 
                                placeholder= "12/30"type="text"  size="14"/>
                            <input className="ml-4 p-2 bg-contrast-slateGray200 h-10"
                                placeholder="CVV" type="text" size="14" />
                         </div>

                      </div>
                    </form>    
                 <SquareLink text ="Agregar"  color="bg-primary-brownPod600" 
                 width ="w-40" textColor="text-contrast-slateGray100"  />         
             </div>         
        </div>
    </div>              
)}
</>      
)}