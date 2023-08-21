import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/firmanpanjiutama" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Panji-Utama" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/_.panji24/" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials