import React from 'react'
import Header from '../../static/Header/Header'
import HeroSection from '../../components/HeroSection'
import CardContainer from '../../components/CardContainer'
import Sponsors from '../../components/Sponsors'

const Home = () => {
  return (
    <div>
       
        <HeroSection />
        <CardContainer/>
        <Sponsors />
        
    </div>
  )
}

export default Home