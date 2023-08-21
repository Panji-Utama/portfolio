import React from 'react'
import './about.css';
import ME from '../../assets/anime_me_no-bg.png'
import {PiStudentBold, PiMagnifyingGlassBold} from 'react-icons/pi'
import {BsFire} from 'react-icons/bs'
// import {CgGym} from 'react-icons/cg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <PiStudentBold className='about__icon'/>
              <h5>Student</h5>
              <small>Software Engineering Undergraduate, <br></br>
              Telkom University</small>
            </article>

            <article className='about__card'>
              <PiMagnifyingGlassBold className='about__icon'/>
              <h5>Focus</h5>
              <small>Fullstack-related knowledge</small>
            </article>

            <article className='about__card'>
              <BsFire className='about__icon'/>
              <h5>Hobby</h5>
              <small>Working out</small>
            </article>
          </div>

          <p>
            Mahasiswa dari Program Studi S1 Rekayasa Perangkat Lunak. Mempunyai hobi berolahraga serta 
            mempelajari apa pun yang menarik minat, terutama mengenai programming ataupun bahasa pemrograman 
            yang belum pernah dipelajari sebelumnya. Beraspirasi menjadi seorang Backend Developer profesional.
          </p>

          <a href="#contact" className='btn btn-primary'>Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About