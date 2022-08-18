import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    -o-object-fit: scale-down;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    /* padding: 8px 24px; */
    margin-top: 50px;
    margin-bottom: 0px; 
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: black;
    font-size: 42px;
    text-align: center;
    font-family: 'Fresca', sans-serif;
    margin: 0;

    @media screen and (max-width: 768px){
        font-size: 40px;

    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: white;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    font-family: 'Fresca', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 24px;

    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroIcons = styled.div`
    display: flex;
    margin-top: 1em;
    gap: 1.5em;

`;

