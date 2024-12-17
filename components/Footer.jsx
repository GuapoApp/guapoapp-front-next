import Link from "next/link";
import Paragraph from "./Paragraph";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className='flex flex-cols-6 gap-20 
                       justify-center items-center 
                        bg-primary-brownPod900 absolute 
                       mt-[100px] ml-[-50%] h-[200px] w-[200%] rounded-t-[120%]'>
      <div className="align-top  h-32">
                      <Image
                        className='relative -mt-6'
                        src='/assets/logos/logo-blanco.png'
                        alt='GuapoApp Logo'
                        width={150}
                        height={150}                        
                       />        
      </div>

      <div className="align-top border-4 
                     border-primary-brownPod900 pr-20 
                     border-r-contrast-slateGray100 h-32 ">
        
        <ul><Paragraph text="Inicio" textColor="text-slate-100" /> </ul>
        <ul><Paragraph text="Beneficios" textColor="text-slate-100"  /></ul>
        <ul><Paragraph text="Acerca de" textColor="text-slate-100"  /></ul>
        <ul> <Link href='/register' >  <Paragraph text="Unete Ahora" textColor="text-slate-100"  /> </Link> </ul>
        <ul> <Link href='/login'>  <Paragraph text="Inicia Sesión" textColor="text-slate-100" /> </Link></ul>
      </div>
      <div className="align-top border-4  border-primary-brownPod900  border-r-contrast-slateGray100 pr-20 h-32">
        <ul><Paragraph text="Quienes somos" textColor="text-slate-100" /></ul>
        <ul><Paragraph text="Misión" textColor="text-slate-100"  /></ul>
        <ul><Paragraph text="Nuestra Visión" textColor="text-slate-100" /></ul>
        <ul><Paragraph text="Valores" textColor="text-slate-100" /></ul>
      </div>
      <div className="align-top border-4 pr-20  border-primary-brownPod900  border-r-contrast-slateGray100 h-32">
        <ul><Paragraph text="Asesores" textColor="text-slate-100"  /></ul>
        <ul><Paragraph text="Asesorados" textColor="text-slate-100"/></ul>
        <ul></ul>
        <ul></ul>
        
      </div>
      <div className="align-top border-4  border-primary-brownPod900 
       border-r-contrast-slateGray100 pr-20 h-32 ">
        <ul><Paragraph text="CONTACTO" textColor="text-slate-100" textAlign="left" /></ul>
        <ul><Paragraph text="info@guapoapp.com" textColor="text-slate-100" textAlign="center" /></ul>
        <ul><Paragraph text="(+52) 442 589 5623" textColor="text-slate-100" textAlign="center" /> </ul>
        <ul></ul>
      </div>
      
    </footer>
  )
}
