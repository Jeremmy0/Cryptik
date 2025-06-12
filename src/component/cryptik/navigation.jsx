"use client"
import Link from "next/link"
import Button from "./ui/button"
export default function Navigation(){
    return(
        <> 
        <section className=" w-[100%] py-4  border-b  border-b-white/10  sticky top-0 backdrop-blur-lg z-90">
                    
            <div className="w-[90%] justify-self-center justify-between flex content-center items-center "> 
                
                <div className="font-bold text-lg text-white ps-5"> <Link href={"/"}> Cryptik.</Link></div>
                <div className="md:flex hidden  gap-4 font-semibold text-white/50 text-sm">
                    <div className=" "> <Link href={"/whyCryptik "}> Why Cryptik? </Link> </div>
                    <div className=" "> <Link href={"/whyCryptik "}> Cryptos </Link> </div>
                    <div className=" "> <Link href={"/whyCryptik "}> How It Works </Link> </div>
                    <div className=" "> <Link href={"/whyCryptik "}> Testimonial  </Link> </div>
                    <div className=" "> <Link href={"/whyCryptik "}> FAQs </Link> </div>                
                </div>
                <Button classNa="hidden md:inline-flex"/>
            </div>
            {/* <div className=" ">
                div
            </div> */}
        </section>
        
        
        </>

    )
}