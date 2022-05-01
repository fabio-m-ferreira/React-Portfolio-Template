import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>  
      <h2>My Experience</h2>
      <div className="container experience-container">
        {/* Frontend Experience */}
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">

          {/* Frontend Experience 1 */}
          <article className='experience-details'>
            <BsPatchCheckFill className="experience-details-icons"/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          {/* Frontend Experience 2 */}
          <article className='experience-details'>
            <BsPatchCheckFill className="experience-details-icons"/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          {/* Frontend Experience 3 */}
          <article className='experience-details'>
            <BsPatchCheckFill className="experience-details-icons"/>
            <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          {/* Frontend Experience 4 */}
          <article className='experience-details'>
            <BsPatchCheckFill className="experience-details-icons"/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Basic</small>
            </div>
          </article>

          {/* Frontend Experience 5 */}
          <article className='experience-details'>
            <BsPatchCheckFill className="experience-details-icons"/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          </div>
        </div>
        {/*End of Frontend Experience*/}
        {/* Backend Experience */}
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">

          {/* Backend Experience 1 */}
          <article className='experience-details'>
            <BsPatchCheckFill className="experience-details-icons"/>
            <div>
              <h4>Node Js</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          {/* Backend Experience 2 */}
          <article className='experience-details'>
            <BsPatchCheckFill className="experience-details-icons"/>
            <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          {/* Backend Experience 3 */}
          <article className='experience-details'>
            <BsPatchCheckFill className="experience-details-icons"/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          {/* Backend Experience 4 */}
          <article className='experience-details'>
            <BsPatchCheckFill className="experience-details-icons"/>
            <div>
              <h4>Firebase</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          </div>
        </div>
        {/*End of Backend Experience*/}

      </div>
    </section>
  )
}

export default Experience