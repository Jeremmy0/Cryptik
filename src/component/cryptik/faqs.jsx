"use client"

import Image from "next/image";
import { useState } from "react";

const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];


const FAQs = () => {
    const [selectedIndex, setSelectedindex] = useState(1);


  return (
    <>
        <div className="w-full px-5 md:px-15 lg:px-20   border-white/20">
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 border-x-1 border-b-1 border-white/20">
                <div className=" col-span-1 md:col-span-2 px-4 py-8 text-center md:text-left"> 
                    <h2 className=" text-2xl font-bold mb-2 ">Your Questions, Answered</h2>
                    <p className=" ">Find everything you need to know about Cryptik, From security to supported assets  </p>
                </div>
                <div className="col-span-1 flex flex-col border-x-1 border-white/20">
                    <div className="border-b-1 border-white/20 flex-1">
                        
                    </div>
                    <div className=" py-4  flex-1  items-center justify-center md:justify-end pe-3 flex">
                        <button className="text-green-400 "> Create Account Now</button> 
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full px-5 md:px-15 lg:px-20 border-b-1 border-white/20">
            {/* Questions and Answer */}
            <div className=" border-x-1  border-white/20 grid grid-cols-1 lg:grid-cols-2 ">
                {faqs.map((faq, faqIndex)=>(
                    <div onClick={()=> setSelectedindex(faqIndex)} key={faq.question} className="bg-neutral-900  border-white/20 p-6 border-y-1 border-x-1 "> 
                        <div className="flex justify-between items-center "> 
                            <h3 className="font-medium">{faq.question}</h3>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={` , ${selectedIndex === faqIndex && "rotate-45"} feather feather-plus text-lime-400 flex-shrink-0 transition duration-500`}> 
                                <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </div>
                    
                            {selectedIndex === faqIndex && (
                                <div className={` overflow-hidden  `}>
                                    <p className="text-white/50"> {faq.answer}</p>
                                </div>
                            )}
                    </div>
                ))}
         </div>            
        </div>

    </>)

}

export default FAQs