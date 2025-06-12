import Link from "next/link"


const Footer = () => {
  return (
    <section className=" w-full  px-5 md:px-15  lg:px-20  ">
        <div className="border-x-1 border-white/20 md:flex  px-8 py-10">
          <div className="flex flex-col justify-between flex-1 gap-3">
            <div className=" flex-1">
              <h1 className="font-bold text-lg text-white ps-5 mb-2 ">Cryptik</h1>
              <p className="text-white/70 ">Simplicity, Performance, Security  empowering you to navigate the digital world with confidence and agility</p>
            </div>
            <div className="">
              <h3 className="">Created by <span className=" "></span> <span className="text-lg font-semibold">Jeremy</span>  </h3>
            </div>
          </div>

          <div className="flex-1"></div>

          <div className="flex-1 flex gap-18 mt-8">
            <div className=" ">
              <h3 className="text-lg mb-3">Navigations</h3>
              <div className=" flex flex-col gap-2 font-light text-white/70 text-base">
                <Link href={"/"}> Why Cryptik </Link>
                <Link href={"/"}> Cryptos </Link>
                <Link href={"/"}> How it Works </Link>
                <Link href={"/"}> FAQs </Link>
                <Link href={"/"}> 404 </Link>
              </div>
            </div>

            <div className=" ">
              <h3 className="text-lg mb-3">Socials</h3>
              <div className=" flex flex-col gap-3 font-light text-white/70 text-base">
                <Link href={"/"}> Why Cryptik </Link>
                <Link href={"/"}> Cryptos </Link>
                <Link href={"/"}> How it Works </Link>

              </div>
            </div>


            

          </div>
        </div>
    </section>
  )
}

export default Footer