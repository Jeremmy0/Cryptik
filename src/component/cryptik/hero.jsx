import React from 'react'
import Image from "next/image"
import Button from './ui/button'
import CryptoBg from './ui/animatedCryptoBg'
import { FaStar, FaGoogle } from 'react-icons/fa'
import HeroBgIcons from './ui/heroBgIcon'

const iconColors = {
  "₿": "#F7931A",      // Bitcoin (orange)
  "Ξ": "#627EEA",      // Ethereum (blue)
  "◎": "#00FFA3",      // Solana (green)
  "🅑": "#F3BA2F",      // Binance Coin (yellow)
  "Ð": "#C2A633",      // Dogecoin (gold)
  "★": "#7D00FF",      // Stellar (purple)
  "T": "#EC1F27",      // Tron (red)
};

// const icons = [
//   { label: "₿", name: "Bitcoin" },
//   { label: "Ξ", name: "Ethereum" },
//   { label: "◎", name: "Solana" },
//   { label: "🅑", name: "Binance Coin" },
//   { label: "Ð", name: "Dogecoin" },
//   { label: "★", name: "Stellar" },
//   { label: "T", name: "Tron" },

// ];
//  top left size rotate opacity
const placements = [
  // left, top, fontSize (vw for responsiveness)
  ["5%", "5%", "10vw", "₿"],
  ["80%", "13%", "8vw", "Ξ"],
  ["20%", "-5%", "12vw", "◎"],
  ["70%", "30%", "9vw", "🅑"],
  ["10%", "23%", "11vw", "Ð"],
  ["77%", "0%", "10vw", "★"],
  ["90%", "26%", "9vw", "T"],
];


const Hero = () => {
  return (
    <>
    <section className="relative w-[100%] overflow-hidden">
        { /*Animated SVG crypto  */}
            <HeroBgIcons placements={placements} iconColors={iconColors} />
        {/* <CryptoBg/> */}
        {/* Blurred background */}
            <div className=" w-[930px] h-[930px] rounded-full bg-white opacity-[0.1] blur-[90px] absolute  top-0 left-0 -translate-x-1/2 -translate-y-9/12"></div>
            <div className=" w-[930px] h-[930px] rounded-full bg-white opacity-[0.1] blur-[90px] absolute right-0  translate-x-5/6 "></div>

            {/* {placement.map} */}










        <section className="w-[100%] py-20 pt-10 overflow-clip ">
            <div className="max-w-[700px] justify-self-center justify-items-center p-5">            
                <div className=" text-[40px] md:text-7xl  text-center my-6 font-extralight ">Take Control of <br />Your Digital Assets</div>
                <div className=" text-lg text-center text-white/70 font-light">Cryptix offers a seamless, secure experience for managing your digital assets. Instant transactions, optimized fees, and premium design.</div>

                <Button classNa="my-6"/>

                <div className="mt-15  ">
                    <div className="justify-self-center">They trust us.</div>
                    <div className="flex items-center gap-2 ">
                        <div className=" text-[#fff] text-3xl flex gap-2"> 
                            <FaStar className='text-amber-400'/> 
                            <FaStar className='text-amber-400'/> 
                            <FaStar className='text-amber-400'/> 
                            <FaStar className='text-amber-400'/> 
                            <FaStar className='text-amber-400'/> 
                        </div>
                        <div className="text-xl font-bold flex gap-1 items-end "><h4 className='-mb-1'>4.9</h4><span className='self-end'><FaGoogle/></span></div>
                    </div>
                </div>
            </div>


        </section>

        <section className="w-full pb-20  ">
                
                <div className="w-[80%] justify-self-center relative ">
                    <div className="w-[50%] h-[200px] rounded-[30] bg-[#00FFB2] opacity-[0.8] blur-[90px] absolute top-0  translate-x-3/6 -z-10 -translate-y-1/4"> </div>
                    
                    <div className="w-[80%] justify-self-center bg-white/40 h-[1px] z-20 -mb-[1px]"></div>
                    <div className="w-full rounded-lg overflow-clip z-50 border-white/30 border-t-[1px] justify-self-center h-[]">
                    <Image 
                        className="fit"
                        src={"/dashboard.avif"}
                        alt="Vercel logomark"
                        width={1200}
                        height={30}
                    />                    
                    </div>
                </div>
                    


        </section>

    </section>
    </>
  )
}

export default Hero