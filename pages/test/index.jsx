import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header6 from "@/components/Header6";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
export default function Test(){
    return(
<> 
{/*<!-- Pin to top left corner -->*/}
<div className="relative h-32 w-32 bg-orange-500 mt-2">
  <div className="absolute left-0 top-0 h-16 w-16  bg-slate-100">01</div>
</div>

{/*<!-- Span top edge -->*/}
<div className="relative h-32 w-32 bg-orange-500 mt-2">
  <div className="absolute inset-x-0 top-0 h-16  bg-slate-100">02</div>
</div>

{/*<!-- Pin to top right corner -->*/}
<div className="relative h-32 w-32 bg-orange-500 mt-2">
  <div className="absolute top-0 right-0 h-16 w-16  bg-slate-100">03</div>
</div>

{/*<!-- Span left edge -->*/}
<div className="relative mt-8 h-32 w-32  pt-6">
    <Image
        className=''
        src='/stock-image-7.jpg'
        alt='GuapoApp Logo'
        width={400}
        height={1000}            
       />
    
  <div className="absolute inset-y-0 py-0 left-5 w-24 pt-5  bg-orange-600">
             <Image
                className='w-full h-full '
                src='/stock-image-8.jpg'
                alt='GuapoApp Logo'
                width={400}
                height={1200}            
               />
  </div>
</div>

{/*<!-- Fill entire parent -->*/}
<div className="relative h-32 w-32 bg-orange-500 mt-2">

  <div className="absolute inset-0 bg-slate-100">05

        <Image
                className=''
                        src='/stock-image-8.jpg'
                        alt='GuapoApp Logo'
                        width={250}
                        height={2000}
                        
                       />
        

  </div>
</div>

{/*<!-- Span right edge -->*/}
<div className="relative h-32 w-32  bg-orange-500 mt-2 ">
  <div className="absolute inset-y-0 right-0 w-16 bg-slate-100">06</div>
</div>

{/*<!-- Pin to bottom left corner -->*/}
<div className="relative h-32 w-32  bg-orange-500 mt-2">
  <div className="absolute bottom-0 left-0 h-16 w-16  bg-slate-100">07</div>
</div>

{/*<!-- Span bottom edge -->*/}
<div className="relative h-32 w-32 bg-orange-500 mt-2">
  <div className="absolute inset-x-0 bottom-0 h-16  bg-slate-100">08</div>
</div>

{/*<!-- Pin to bottom right corner -->*/}
<div className="relative h-32 w-32 bg-orange-500 mt-2">
  <div className="absolute bottom-0 right-0 h-16 w-16  bg-slate-100">09</div>
</div>

<Paragraph text = "Hola mundo" />


<div className="overflow-x-hidden">
  <div className="absolute mt-[100px] ml-[-50%] h-[200px] w-[200%] rounded-t-[100%] 
  bg-gradient-toy-b from-orange-400 via-orange-500 to-orange-600">
    <div className="mt-5 text-center text-2xl text-white">Footer</div>
  </div>
</div>






</>

    )
}
