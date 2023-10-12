import React, {useRef} from 'react';
import './contact.css';
import miconsInstitute from '../../assets/MICONS (500 × 200 piksel).png';
import metronARC from '../../assets/metronarc_technology_logo.png';
import englishMechatronics from '../../assets/English-Mechatronics.jpg';
import isfal from '../../assets/ISFAL.png';
import LinkedInLogo from '../../assets/LinkedIn.png';
import WhatsAppLogo from '../../assets/WhatsApp.png';
import InstagramLogo from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
 const form = useRef();
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c43g82b', 'template_gexxpwl', form.current, 'maDVJllAwpaDkmdjo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Collaborations</h1>
            <p className='clientsDesc'>
            I've had the privilege of collaborating with a diverse array of companies and spearheading the establishment of vibrant communities. 
            Notable entities and communities I've been involved with include
            </p>
            <div className='clientImgs'>
                <img src={miconsInstitute} alt='miconsInstitute' className='clientImg'></img>
                <img src={metronARC} alt='metronARC' className='clientImg1'></img>
                <img src={englishMechatronics} alt='englishMechatronics' className='clientImg'></img>
                <img src={isfal} alt='isfal' className='clientImg'></img>
            </div>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to contact me</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name'></input>
                <input type='email' className='email' placeholder='Your Email' name='from_email'></input>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={LinkedInLogo} alt='LinkedIn' className='link'></img>
                    <img src={WhatsAppLogo} alt='WhatsApp' className='link'></img>
                    <img src={InstagramLogo} alt='Instagram' className='link'></img>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;
