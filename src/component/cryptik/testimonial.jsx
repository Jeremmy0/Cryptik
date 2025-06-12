import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const Testimonials = () => {
  return (
      <div className="w-full  border-b-1 border-white/20  ">
          <div className="w-full  px-5 md:px-15  lg:px-20  ">
              <div className=" text-center py-6 border-x-1 border-white/20">
                  <h2 className="text-2xl font-light pb-2">Trusted by Crypto Enthusiast Worldwide</h2>
                  <p className="text-base">Be part of a growing community of crypto enthusiasts. Share insights, tips, and strategies with fellow traders.</p>
              </div>
          </div>


          <div className="w-full ">
              <div className="w-full  px-5 md:px-15  lg:px-20 ">
                  <div className="grid grid-cols-1 md:grid-cols-3 border-t-1 border-white/20"> 
                      <div className="col-span-2 relative flex flex-col gap-10 border-x-1 border-white/20 px-8 md:px-12 py-8 overflow-hidden">
                          <div className=" w-[80%] h-[70%] rounded-full bg-white opacity-[0.3] blur-[90px] absolute  top-0 left-0  -translate-y-2/6 "></div>
                          <div className="flex ">
                              <div className="size-12 rounded-full bg-white/50  border border-green-400  "></div>
                              <div className="size-12 rounded-full bg-blue-400  -ms-2 -"></div>
                          </div>
                          <div className="text-xl font-light text-left ">"Cryptik makes crypto trading effortless. Fast transaction, low fees, and also a sleek interface... just what i needed. "</div>
                          <div className="flex  w-full justify-between   ">
                              <div className="">
                                  <h4 className="text-sm font-semibold pb-1 ">Alex M.</h4>
                                  <p className="text-sm font-light "> Blockchain Analyst at NovaChain</p>
                              </div>
                              <div className="text-md font-light items-end self-end"> 1/3</div>
                          </div>
                      </div>
                      <div className="col-span-1 border-e-1 flex justify-between md:flex-col border-white/20">  
                          {/* Empty div at the top */}
                          <div className="flex-6 hidden md:flex"></div>
                          {/* Button at the bottom */}
                          <div className="gap-2   text-left p-2 ps-8 border-1 border-white/20 flex-1 md:flex-1 flex">
                              <FaArrowLeft className="self-center text-green-400 "/> <button className="">previous </button>
                          </div>
                          
                          <div className="gap-2  flex justify-end p-2 pe-8  border-t-1 border-white/20 flex-1 md:flex-1">
                              <button className=" ">Next </button><FaArrowRight className="text-green-400 self-center"/>
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>


      </div>

  )
}

export default Testimonials