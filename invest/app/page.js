'use client'
import About from '@/components/About'
import ContactUs from '@/components/ContactUs'
import Count from '@/components/Count'
import CryptoSlider from '@/components/CryptoSlider'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Plans from '@/components/Plans'

export default function Home() {


  return (
    <div className='bg-contain bg-no-repeat' style={{backgroundImage: `url('background2.webp')`}}>
    <Header/>
    <div id='home'>
    <Hero/>
    </div>
    <CryptoSlider/>
    <div id='about'>
    <About/>
    </div>
    <HowItWorks/>
    <Count/>
    <div id='plans'>
    <Plans/>
    </div>
    <div id='contact'>
    <ContactUs/>
    </div>
    <Footer/>
    </div>
  )
}
