import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroIcons } from './HeroElements'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import './Hero.css'

const HeroSection = () => {
  
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Hi, 👋 <br/> I'm Taylor Sheipline</HeroH1>
            <HeroP><span></span></HeroP>
            <HeroIcons>
              <a href="https://github.com/tmsheipline" className='socialico' target='_blank'><FaGithub /></a>
              <a href="https://www.linkedin.com/in/taylorsheipline/" className='socialico' target='_blank'><FaLinkedin/></a>
              <a href="https://www.facebook.com/taylor.sheipline" className='socialico' target='_blank'><FaFacebook/></a>
            </HeroIcons>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection