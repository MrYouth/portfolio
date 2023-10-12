import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.jpeg';
import Portfolio2 from '../../assets/portfolio-2.jpeg';
import Portfolio3 from '../../assets/portfolio-3.jpeg';
import Portfolio4 from '../../assets/portfolio-4.jpeg';

const works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in immersing myself in the field of Internet of Things, serving as a mentor in English for Engineers. Additionally, I actively contribute to the management of operational requirements at a training center.</span>
        <div className='worksImgs'>
          <img src={Portfolio1} alt=''  className='worksImg'/>
          <img src={Portfolio2} alt=''  className='worksImg'/>
          <img src={Portfolio3} alt=''  className='worksImg'/>
          <img src={Portfolio4} alt=''  className='worksImg'/>
        </div>
    </section>

  )
}

export default works;
