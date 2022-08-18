import React from 'react'
import { Button } from 'react-scroll'
import { InfoContainer, InfoWrapper, Column1, TextWrapper, Heading, Subtitle, BtnWrap, Column2, Img, ImgWrap, InfoRow, TopLine } from './infoElements'


function InfoSection({lightBg,id, imgStart,topLine,lightText,headline,darkText,description,img, alt}) {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        {/* <Button to="home">Button</Button> */}
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                    <Img src={img} alt={alt} />
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection