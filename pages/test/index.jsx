import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Navbar from "../components/NavBar";

export default function Test(){
    return(
<>                
    <div className="bg-[url('/Fondolanding.jpg')] w-1240 h-780
     bg-cover bg-center items-center justify-center">
       <Navbar />
        <div className="pt-28 text-white">
            <Header1 text="Hola mundo"/>
        </div>
        <div>
            <Header2 text="Hola mundo"/>     
        </div>        
    </div>
</>

    )
}
