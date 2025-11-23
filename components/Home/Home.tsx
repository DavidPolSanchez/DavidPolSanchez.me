
import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Blog from './Blog/Blog'
import FindMe from './FindMe/FindMe'


const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero/>
      <Blog/>
      <Services/>
      <FindMe/>
      <Resume/>
      <Projects/>
      </div>
  )
}

export default Home
