import React from 'react'
import Navbar from './Navbar'
import Intro from '../sections/Intro'

const Header = () => {
  return (
    <div className='flex flex-col w-full lg:p-8'>
      <Navbar />
      <Intro />
    </div>
  )
}

export default Header