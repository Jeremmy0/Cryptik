"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import CryptoSlider from "./cryptoSlider";


const icons = [
  {description:"some text here ", label: "₿", name: "Bitcoin" },
  {description:"some text here ", label: "Ξ", name: "Ethereum" },
  {description:"some text here ", label: "◎", name: "Solana" },
  {description:"some text here ", label: "🅑", name: "Binance " },
  {description:"some text here ", label: "✕", name: "Ripple" },
  {description:"some text here ", label: "Ð", name: "Dogecoin" },
  {description:"some text here ", label: "₳", name: "Cardano" },
  {description:"some text here ", label: "●", name: "Polkadot" },
  {description:"some text here ", label: "Ł", name: "Litecoin" },
  {description:"some text here ", label: "Λ", name: "Avalanche" },
  {description:"some text here ", label: "🔗", name: "Chainlink" },
  {description:"some text here ", label: "🦄", name: "Uniswap" },
  {description:"some text here ", label: "★", name: "Stellar" },
  {description:"some text here ", label: "T", name: "Tron" },
  {description:"some text here ", label: "🐕", name: "Shiba Inu" },
  {description:"some text here ", label: "ɱ", name: "Monero" },
];


const AllCryptos = () => {
    
  useEffect(() => {
    gsap.to(
      ".arrowDown",

      {
        y: 5,
        duration: 1,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    
            <div className="w-full border-b-1 border-white/20  px-5 md:px-15  lg:px-20  flex flex-col md:flex-row ">
                <div className="flex-1 flex justify-between flex-col border-x-1 border-white/20 z-20 md:w-[34%]">
                    <div className="md:pb-20 pb-5 pe-4 pt-4 ps-4 text-center lg:text-left">
                        <h1 className=" text-2xl font-light pb-2 "> All Cryptos, One Platform</h1>
                        <p className="text-md ">Buy, Sell and convert all major cryptocurrencies on a single platform. A seamless experience with no compromises </p>
                    </div>
                    <div className="w-full border-1 border-white/20  self-baseline py-4 md:ps-4 md:py-3 justify-center justify-items-center"> 
                        <div className="text-green-400  font-light"> Buy Crypto Now</div>
                    </div>
                </div>


                <div className=" border-e-1 border-white/20 md:w-[66%] overflow-clip "> 
                 <CryptoSlider className={"mt-2 "}/>
                 <CryptoSlider className="pe-18 my-2 flex-row-reverse arrowDown" direction="right" />
                 <CryptoSlider className={""}/>
                 <CryptoSlider className="pe-22 my-2 flex-row-reverse arrowDown" direction="right"/>
                    {/* <div className="flex gap-2">
                        {icons.map((icon,idx)=>{
                            return(
                            <div className=" gap-3 flex rounded-full ps-2 pe-4 py-1 border-2 border-white/20 items-center" key={idx}>
                                <div className=" size-12 rounded-full text-center  content-center bg-transparent border-1 border-white/10 shadow-2xl shadow-white/30   ">{icon.label}</div>
                                <div className=" flex flex-1 gap-2">
                                    <div className=" ">  
                                        <h5 className=" ">{`${icon.name}  `}</h5>

                                    </div>
                                    <div className={` ${(idx % 2) ? "text-green-400": "text-red-400"}}`}> <h5 className="" >+40%</h5></div>
                                </div>
                                <div className=" text-sm ">  
                                    <h5 className=" ">{`${icons.name}                             `}</h5>
                                    <div className=" flex gap-2 w-[100%]"> <p className="text-xs">some text  </p>
                                     </div>
                                </div>
                                <div className={` ${(idx % 2) ? "text-green-400": "text-red-400"}}`}> <h5 className="" >+40%</h5></div>
                            </div>)
                        })}

                    </div> */}


                  {/* <div className="flex gap-2 flex-row-reverse">
                        {icons.map((icon,idx)=>{
                            return(
                            <div className=" gap-3 flex rounded-full ps-2 pe-4 py-1 border-2 border-white/20 items-center" key={idx}>
                                <div className=" size-12 rounded-full text-center  content-center bg-transparent border-1 border-white/10 shadow-2xl shadow-white/30   ">{icon.label}</div>
                                <div className=" flex flex-1 gap-2">
                                    <div className=" ">  
                                        <h5 className=" ">{`${icon.name}  `}</h5>

                                    </div>
                                    <div className={` ${(idx % 2) ? "text-green-400": "text-red-400"}}`}> <h5 className="" >+40%</h5></div>
                                </div>
                                <div className=" text-sm ">  
                                    <h5 className=" ">{`${icons.name}                             `}</h5>
                                    <div className=" flex gap-2 w-[100%]"> <p className="text-xs">some text  </p>
                                     </div>
                                </div>
                                <div className={` ${(idx % 2) ? "text-green-400": "text-red-400"}}`}> <h5 className="" >+40%</h5></div>
                            </div>)
                        })}

                    </div>  */}

                    {/* <div className="w-full ">
                        <Image
                        className="fit opacity-15"
                        src={"/bannerhero.webp"}
                        width={1000}
                        height={0}
                        alt={"crypto images"}/>
                    </div>
                    <div className="w-full">
                        <Image
                        className="fit opacity-15"
                        src={"/bannerhero.webp"}
                        width={1000}
                        height={0}
                        alt={"crypto images"}/>
                    </div> */}
                </div>
            </div>
  )
}

export default AllCryptos