import Button from "./ui/button"


const Cta = () => {

  return (

                <div className="w-full border-b-1 border-white/20 px-5 md:px-15  lg:px-20  flex justify-center   ">
                    
                    <div className="w-full text-center justify-self-center  border-x-1 border-white/20 pt-20 pb-14 relative overflow-hidden px-2">
                        <div className=" w-[930px] h-[930px] rounded-b-full bg-white opacity-[0.3] blur-[90px] absolute  top-0 left-0 -translate-x-2/6 -translate-y-10/12"></div>
                        <div className=" w-[930px] h-[930px] rounded-b-full bg-green-400 opacity-[0.3] blur-[90px] absolute  bottom-0 right-0 translate-x-3/6 translate-y-11/12"></div>

                        <h1 className="text-2xl font-bold mb-4">Ready to take control of your Crypto? </h1>
                        <p className="text-md w-full md:max-w-[50%] justify-self-center ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas exercitationem iste dicta impedit, recusandae voluptates, assumenda culpa repudiandae ipsam aliquid aut obcaecati?</p>

                        <Button classNa="mt-15 mb-1  inline-flex"/>
                    </div>
                </div>

                 
  )
}

export default Cta