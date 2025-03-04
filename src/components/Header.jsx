import React from 'react'
import Navbar from './Navbar'
import Intro from '../sections/Intro'

const Header = () => {
  return (
    <div className='lg:pt-14 md:pt-14'>
      <Navbar />
      <Intro />
    </div>
  )
}

export default Header