import AllCryptos from "@/component/cryptik/allCryptos";
import Cta from "@/component/cryptik/cta";
import FAQs from "@/component/cryptik/faqs";
import Hero from "@/component/cryptik/hero";
import HowItWorks from "@/component/cryptik/howItWorks";
// import Dashboard from "@/component/cryptik/dashboard";
import Introduction from "@/component/cryptik/introduction";
import SpacePanel from "@/component/cryptik/spacePanel";
import Testimonials from "@/component/cryptik/testimonial";
import ChooseUs from "@/component/cryptik/whyChooseUS";



export default function Home(){
    return(
        <>
            <Hero/>
            {/* <Dashboard/> */}
            <Introduction/>
            <ChooseUs/>
            <SpacePanel/>   
            <AllCryptos/>
            <SpacePanel/>
            <HowItWorks/>
            <SpacePanel/>
            <Testimonials/>
            <SpacePanel/>
            <FAQs/>
            <SpacePanel/>






            
            <Cta/>
            

        
        
        </>
    )
}