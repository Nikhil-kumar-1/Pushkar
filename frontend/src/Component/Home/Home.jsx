import React from 'react'
import HeroSection from './Hero'
import About from './About'
import Services from './Service'
import Video from './Video'
import GetInTouch from '../GetInTouch'
import Article from './Article'
import CTA from '../Cta'
import GoogleReviews from '../GoogleReview'


const HOME = () => {
  return (
    <div>
  <HeroSection />
   <Services />
   <About />
  <Video />
  <Article />
  <GoogleReviews />
  <GetInTouch />
  <CTA />
     
    </div>
  )
}

export default HOME
