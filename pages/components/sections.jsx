import Image from "next/image"

export default function Sections(){
    return(
        <>
        <section className="flex flex-rows-1 justify-center items-center">
             <Image
                src="/landing.jpg"
                width={1240}
                height={738}
                alt="Logo" />
            </section>
        <section className=" justify-center items-center mt-8">
            <div className="flex flex-rows-1 
                 justify-center items-center">
                 Hola somos GuapoApp, Consultoria Asesoria de Imagen</div>
            <div className="flex flex-cols-4 justify-center items-center gap-10">
                <div>
                    <Image
                     src="/card1.jpg"
                     width={200}
                     height={400}
                     alt="Card1" />
                    
                </div>
                <div>
                    <Image
                         src="/card3.jpg"
                         width={200}
                         height={400}
                         alt="Card2" />
                    </div>
                <div>
                    <Image
                         src="/card2.jpg"
                         width={200}
                         height={400}
                         alt="Card3" />
                </div>
                <div>
                    <Image
                         src="/card4.jpg"
                         width={200}
                         height={400}
                         alt="Card3" />
                </div>

            </div>
        </section>

        <div className="flex flex-cols-2 mt-8 bg-gray-100">
             <section className="ml-24 mb-8 ">
                <Image
                    src="/wall.jpg"
                    width={200}
                    height={400}
                  alt="Logo" />
            </section>
             <section className="ml-24 mb-8 bg-orange-600">
                    <div>
                        <p>Esto es una prueba de como funciona el componente sections</p>
                </div>            
            </section>
    </div>
    <section>

    </section>
        </>        
    ) 
}