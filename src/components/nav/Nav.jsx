import React from 'react'
import './nav.css'
import {BiHome, BiUser, BiMessageDetail} from 'react-icons/bi'
import {BsBriefcase} from 'react-icons/bs'

const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><BiHome/></a>
      <a href="#about"><BiUser/></a>
      <a href="#experience"><BsBriefcase/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav
