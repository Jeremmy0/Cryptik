import Image from "next/image";
import SpacePanel from "./spacePanel";
import { FaLock, FaShieldAlt, FaBeer, FaBolt,FaMoneyBill, FaStar, FaShield } from "react-icons/fa"


export default function ChooseUs(){


    return(
        <>
        <section className="pt-20 w-full  border-white/20"> 
            <div className="text-center items-center mb-6">  
                <h1 className="md:text-4xl text-2xl pb-3 ">Why Choose Cryptik ?</h1>
                <p className="text-lg px-4"> Wo alaye mi sha choose us. we day reliable like mad </p>
            </div>

            
            <div className=" w-full border-y-1 border-white/20"> 
                <div className=" flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row  px-5 md:px-15  lg:px-20 ">
                    <div className="px-4 pt-3 pb-3 border-x-1 border-white/20 flex flex-col border-b-1">
                        <span className="size-13 mb-3 rounded-full border-white/20 border-1 bg-white/10 content-center  justify-items-center "><FaShieldAlt className="text-xl text-green-400"/></span>
                        <h3 className="text-lg font-semibold pb-1">Maximum Security </h3>
                        <p className=" text-md ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, nam? At dicta illum quod.</p>
                    </div>
                    <div className="px-4 pt-3 pb-3 border-x-1 border-white/20 flex flex-col border-t-1 ">
                        <span className="size-13 mb-3 rounded-full border-white/20 border-1 bg-white/10 content-center  justify-items-center"><FaBolt className="text-xl text-green-400"/></span>
                        <h3 className="text-lg font-semibold pb-1">Instant Transaction</h3>
                        <p className=" text-md ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, nam? At dicta illum quod.</p>
                    </div>
                    <div className="px-4 pt-3 pb-3 border-x-1 border-white/20 flex flex-col border-y-1">
                        <span className="size-13 mb-3 rounded-full border-white/20 border-1 bg-white/10 content-center  justify-items-center"><FaMoneyBill className="text-xl text-green-400"/></span>
                        <h3 className="text-lg font-semibold pb-1">Optimized Fees</h3>
                        <p className=" text-md ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, nam? At dicta illum quod.</p>
                    </div>
                    <div className="px-4 pt-3 pb-3 border-x-1 border-white/20 flex flex-col border-t-1">
                        <span className="size-13 mb-3 rounded-full border-white/20 border-1 bg-white/10 content-center  justify-items-center"><FaStar className="text-xl text-green-400" /></span>
                        <h3 className="text-lg font-semibold pb-1">Premium Interface</h3>
                        <p className=" text-md ">Lorem sit, amet consectetur adipisicing elit. Aliquid, nam? At dicta illum quod.</p>
                    </div>
                </div>
            </div>


        </section>
        </>
    )}