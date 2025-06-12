
import Image from "next/image";

const HowItWorks = () => {
         const items =[
        {image: "/1.avif", subText:"Create Your Account  ", description:"Sign up easily and securely with just a few clicks. No complex processes, just straightup registration.", positionX:"-translate-x-1/6" , positionY:"-translate-y-2/6"},
        {image: "/2.avif", subText:"Verify Your Identity", description:"Complete a quick verification process to ensure the security of your account and transactions.", positionX:"-translate-y-2/6", positionY:""},
        {image: "/3.avif", subText:"Fund Your Account", description:"Add funds to your account using various payment methods. We support multiple currencies for your ease", positionX:  "translate-x-1/6", positionY:"-translate-y-2/6"},
     
    ]

    // const position = items.position.splice()

  return (
    <div className="w-full px-5 md:px-15 lg:px-20 border-b-1 border-white/20">
        <div className=" grid grid-cols-1 md:grid-cols-3  border-x-1 border-white/20 ">
            <div className="col-span-1 md:col-span-2 px-4 py-8 text-center md:text-left "> 
                <h2 className=" text-3xl font-light ">How it Works</h2>
                <p className=" ">A simple fast  and secure platform to manage your crypto currencies in just few steps </p>
            </div>
            <div className="col-span-1 flex md:flex-col flex-row border-x-1 border-white/20">
                <div className="border-y-1 border-white/20 flex-1 hidden md:flex">
                    
                </div>
                <div className="border-y-1 border-white/20 flex-1 md:flex-0 py-3 items-center justify-center  md:justify-end pe-3 flex">
                    <button className="text-green-400 "> Create Account Now</button> 
                </div>
            </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            overflow-hidden ">
        {items.map((item, idx) => (
            
        <div key={idx} className="relative flex flex-col items-center bg-transparent border-1 border-white/20  overflow-hidden md:overflow-visible min-h-[420px] ">
        {/* Blurred background{(idx=4)?"jg":"giyfg"} */}
        <div className={`absolute w-[90%] h-[70%] rounded-full bg-white/50 opacity-[0.5] blur-[50px] top-0   pointer-events-none -z-10 ${item.positionX}  ${item.positionY} `}></div>

        {/* Image section */}
        <div className="w-full flex justify-center items-start" style={{height: '70%'}}>                      
        <Image
            src={ `${item.image}`} // Replace with your image paths
            alt={`Card ${item.description}`}
            className="object-contain h-[70%] max-h-[220px] mt-8"
            width={300}
            height={300}
            loading="lazy"
        />
        </div>

        {/* Text section */}
        <div className="w-full flex flex-col  md:items-start justify-end flex-1 px-4 pb-8">
        <div className="text-lg font-bold mb-1"> {item.subText}</div>
        <p className="text-left  text-md text-white/80">
            {item.description}
        </p>
        </div>
        </div>
        ))}
        </div>
    </div>

  )
}

export default HowItWorks