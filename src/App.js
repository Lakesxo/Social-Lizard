import React from 'react'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
