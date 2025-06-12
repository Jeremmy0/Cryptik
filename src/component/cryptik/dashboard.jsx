import Image from "next/image"

export default function Dashboard(){  
    //  github.com/speedyapply/2025-SWE-college-jobs   
return(
 
        <>
            <section className="w-full pb-20  ">
                
                <div className="w-[90%] md-[80%] justify-self-center relative overflow-hidden ">
                    <div className="w-[50%] h-[200px] rounded-[30] bg-[#00FFB2] opacity-[0.8] blur-[90px] absolute top-0  translate-x-3/6 -z-10 -translate-y-1/4"> </div>
                    
                    <div className=" justify-self-center bg-white/40 h-[1px] z-20 -mb-[1px] relative"></div>
                    <div className="w-[80%] rounded-lg z-50 border-white/30 border-t-[1px] justify-self-center ">
                    <Image 
                       className="fit"
                       src={"/images/dashboard.avif"}
                        alt="Vercel logomark"
                        width={300}
                        height={20}
                    />                    
                    </div>
                </div>
                 


            </section>
        
        </>
    )
}