import Hero from "@/components/Hero"
import About from "@/components/About"
import HowWeHelp from "@/components/HowWeHelp"
import Testimonial from "@/components/Testimonial"
import Success from "@/components/Success"
import ContactSec from "@/components/ContactSec"
import Footer from "@/components/Footer"
// import Image from "next/image"

export default function Home() {
  return (

    <div className="">
        <Hero />
        <About />
        <HowWeHelp />
        <Testimonial />
        <Success />
        <ContactSec />
        <Footer />
    </div>

  )
}
