import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroIcons } from './HeroElements'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css'

const HeroSection = () => {
  
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay={true} loop={true} playsInline={true} controls={false} muted={true} data-wf-ignore={true} src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Hi, 👋 <br/> I'm Taylor Southline</HeroH1>
            <HeroP><span></span></HeroP>
            <br></br>
            <HeroIcons>
              <a href="https://github.com/tmsheipline" className='socialico' target='_blank' rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/taylorsheipline/" className='socialico' target='_blank' rel="noreferrer"><FaLinkedin/></a>
              <a href="mailto:taylorsheipline_2012@hotmail.com" className='socialico' target='_blank' rel="noreferrer"><FaEnvelope/></a>
            </HeroIcons>
        </HeroContent>
    </HeroContainer>
  )
}



export default HeroSection