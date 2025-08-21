import React from 'react'
import HeroSection from './Hero'
import About from './About'
import Services from './Service'
import Video from './Video'
import GetInTouch from '../GetInTouch'
import Article from './Article'


const HOME = () => {
  return (
    <div>
  <HeroSection />
  <Video />
  <About />
  <Services />
  <Article />
  <GetInTouch />
     
    </div>
  )
}

export default HOME
