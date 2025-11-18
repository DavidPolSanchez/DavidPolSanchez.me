
import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Blog from './Blog/Blog'


const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero/>
      <Services/>
      <Resume/>
      <Projects/>
      <Blog/>
      </div>
  )
}

export default Home
