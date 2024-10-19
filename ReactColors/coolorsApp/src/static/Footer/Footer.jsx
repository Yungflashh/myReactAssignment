import React from 'react'
import "../../styles/Footer.css"
import Tools from '../../components/Tools'
import More from '../../components/More'
import Jobs from '../../components/Jobs'
import Company from '../../components/Company'

const Footer = () => {
  return (
    <div className='Footer'>
        <Tools />
        <More />
        <Jobs />
        <Company />
    </div>
  )
}

export default Footer