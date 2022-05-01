import React from 'react'
import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Avatar1,
    name: 'Kwame Ibrahim',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed reiciendis, non delectus autem dolore eligendi debitis assumenda vitae reprehenderit nisi recusandae placeat dolores facere neque rem ad eos exercitationem.'
  },
  {
    avatar: Avatar2,
    name: 'Hwa-Young',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed reiciendis, non delectus autem dolore eligendi debitis assumenda vitae reprehenderit nisi recusandae placeat dolores facere neque rem ad eos exercitationem.'
  },
  {
    avatar: Avatar3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed reiciendis, non delectus autem dolore eligendi debitis assumenda vitae reprehenderit nisi recusandae placeat dolores facere neque rem ad eos exercitationem.'
  },
  {
    avatar: Avatar4,
    name: 'John Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sed reiciendis, non delectus autem dolore eligendi debitis assumenda vitae reprehenderit nisi recusandae placeat dolores facere neque rem ad eos exercitationem.'
  },
]



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials-container'
          // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
              <div className="client-avatar">
                <img src={avatar} alt={name} />
              </div>  
              <h5 className='client-name'>{name}</h5>
              <small className='client-review'>
                {review}
              </small>
            </SwiperSlide> 
          )
        })} 
      </Swiper> 
    </section>
  )
}

export default Testimonials