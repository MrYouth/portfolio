import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Rico</span> <br/>Mechatronics Engineer</span>
          <p className='introPara'>Operation Manager | Product Development Engineer | Driving Changes and Impact | <br/>Passionate and Collaborative Learner</p>
          <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg'></img>Contact me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro
