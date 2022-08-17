import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'

const HeroSection = () => {
    //for a button if need be
    // const [hover, setHover] = useState(false)

    // const onHover = () => {
    //     setHover(!setHover)
    // }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Hi, <br/> I'm Taylor Sheipline</HeroH1>
            <HeroP>a Software Engineer</HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection