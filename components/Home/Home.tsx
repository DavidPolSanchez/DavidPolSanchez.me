'use client'

import React from 'react'
import dynamic from 'next/dynamic'

import Hero from './Hero/Hero'

const DynamicBlog = dynamic(() => import('./Blog/Blog'), {
  ssr: false,
})

const DynamicFindMe = dynamic(() => import('./FindMe/FindMe'), {
  ssr: false,
})

const DynamicResume = dynamic(() => import('./Resume/Resume'), {
  ssr: false,
})

const DynamicProjects = dynamic(() => import('./Projects/Projects'), {
  ssr: false,
})


const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero/>
      <DynamicBlog />
      <DynamicFindMe/>
      <DynamicResume/>
      <DynamicProjects/>
      </div>
  )
}

export default Home
