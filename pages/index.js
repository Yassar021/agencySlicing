import Head from "next/head"
import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Hero from "../components/heros"
import OurExpertise from "../components/ourexpertise"
import Ourservice from "../components/ourservices"
import Partners from "../components/partners"

const Index = () => {
  return(
    <>
    <Head>
      <title>Agency-App</title>
    </Head>

    <Hero />
    <About />
    <Ourservice />
    <OurExpertise />
    <Partners />
    <Contact />
    <Footer />
    </>
  )
}

export default Index