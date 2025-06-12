"use client"
import Footer from '@/component/footer'
import React from 'react'
import { useRef,useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';




// const HorizontalScroll = () => {

//     gsap.registerPlugin(ScrollTrigger)
// useEffect(()=>{
    //    gsap.fromTo(".innerDiv", {
        //         translateX:0,
        //     }, {
            //         translateX:"-400vw",
            //         ease:"none",
            //         duration:1,
            //         backgroundColor:"green",
            //         // HorizontalScroll:true,
            //         scrollTrigger:{
                //             trigger:".trigger",
//             start:"top top",
//             end:"90% top",
//             scrub:0.6, 
//             pin:true,
    
//         }
//     });

//     gsap.fromTo(".footr", 4 ,{
    //     backgroundColor:"white"
    //     }, {
        //     backgroundColor:"blue"
        //     });
        // }
        // }
        
        
        const HorizontalScroll  = () => { 
            
                gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{

           const pin = gsap.fromTo(".innerDiv", {
                x:0
            },{
                x: "-400vw",
                ease:"none",
                duration: 1 ,
                scrollTrigger:{
                    trigger:".outerDiv",
                    start:"top top",
                    end:"bottom top",
                    scrub:true,
                    pin:true,
                    anticipatePin:1, 
                    pinSpacing:true,
                }
                // repeat:Infinity ,
            })

            return()=>{
                pin.kill()
            }
        },[])



    return (<>
    <div className=''>
        <section className="outerDiv h-[100vh] w-[100vw]   ">
            <div className="trigger ">
                <div  className="innerDiv h-[50vh] md:h-[100vh] w-[500vw] flex overflow-hidden ">
                    <div className="sectionFull h-[50vh] md:h-[100vh] w-[100vw] bg-amber-600">1</div>
                    <div className="sectionFull h-[50vh] md:h-[100vh] w-[100vw] bg-blue-600">11</div>
                    <div className="sectionFull h-[50vh] md:h-[100vh] w-[100vw]  bg-green-600">111</div>
                    <div className="sectionFull h-[50vh] md:h-[100vh] w-[100vw]  bg-purple-600">1111</div>
                    <div className="sectionFull h-[50vh] md:h-[100vh] w-[100vw]  bg-pink-600">111111</div>
                </div>

             </div>       
               
        </section>
    
    </div>
    <Footer/>
    </>

  );
}

    export default HorizontalScroll