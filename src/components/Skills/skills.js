import React from 'react';
import './skills.css';
import englishEngineer from '../../assets/english-engineer.png';
import englishCommunity from '../../assets/english-community.png';
import internetofThings from '../../assets/internet-of-things.png';
import operationManager from '../../assets/operation-manager.png';

const skills = () => {
  return (
    <div>
        <section id='skills'>
            <span className='skillTitle'>What I Do</span>
            <span className='skillDesc'>I am a proficient and enthusiastic Internet of Things developer, adept at seamlessly integrating hardware and software through dedicated research and development. Additionally, I actively contribute as an English for Engineers trainer, fostering a community for language enthusiasts in my surroundings.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src ={operationManager} alt='internetofThings' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>Operational Manager</h2>
                        <p>I play a pivotal role as the operational manager of a training center, overseeing and managing its day-to-day operational requirements.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src ={englishEngineer} alt='englishEngineer' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>English for Engineer Training</h2>
                        <p>I actively serve as a mentor and trainer specializing in English for Engineers.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src ={englishCommunity} alt='englishCommunity' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>English Community Enthusiasts</h2>
                        <p>I co-founded the "English for Mechatronics" community to elevate proficiency in English for individuals in the field of Mechatronics.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src ={internetofThings} alt='internetofThings' className='skillBarImg'></img>
                    <div className='skillBarText'>
                        <h2>Internet of Things Researcher</h2>
                        <p>I engage actively in ongoing research within the field of Internet of Things, continually refining and advancing my expertise in this domain.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default skills;
