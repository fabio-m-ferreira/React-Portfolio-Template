import React from 'react'
import './about.css'
import ME from '../../assets/about_me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About"/>
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            
            {/* Card 1 */}
            <article className='about-card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            {/* Card 2 */}
            <article className='about-card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            {/* Card 3 */}
            <article className='about-card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta deserunt amet quod voluptas alias non, aperiam laboriosam veniam eius libero officiis odit, maiores, et quas quae obcaecati eligendi deleniti dolor.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About