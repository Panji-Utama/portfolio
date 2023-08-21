import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/berdua.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Firman Panji Utama</h1>
        <h5 className="text-light">Software Engineering Student & Backend Enthusiast</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header