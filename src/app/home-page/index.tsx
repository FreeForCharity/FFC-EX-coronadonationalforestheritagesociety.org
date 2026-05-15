import React from 'react'
import Hero from '@/components/coronado-heritage/Hero'
import Mission from '@/components/coronado-heritage/Mission'
import Programs from '@/components/coronado-heritage/Programs'
import Chapters from '@/components/coronado-heritage/Chapters'
import Volunteer from '@/components/coronado-heritage/Volunteer'
import DonateCTA from '@/components/coronado-heritage/DonateCTA'
import Contact from '@/components/coronado-heritage/Contact'

const HomePage: React.FC = () => {
  return (
    <main id="main">
      <Hero />
      <Mission />
      <Programs />
      <Chapters />
      <Volunteer />
      <DonateCTA />
      <Contact />
    </main>
  )
}

export default HomePage
