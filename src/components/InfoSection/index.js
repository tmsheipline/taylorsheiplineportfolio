import React from "react";
import { Button } from "react-scroll";
import {
  InfoContainer,
  InfoWrapper,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  Img,
  ImgWrap,
  InfoRow,
  TopLine,
} from "./infoElements";
import "./InfoSection.css";

// function InfoSection({lightBg,id, imgStart,topLine,lightText,headline,darkText,description,img, alt}) {
//   return (
//     <>
//         <InfoContainer lightBg={lightBg} id={id}>
//         <InfoWrapper>
//             <InfoRow imgStart={imgStart}>
//                 <Column1>
//                 <TextWrapper>
//                     <TopLine>{topLine}</TopLine>
//                     <Heading lightText={lightText}>{headline}</Heading>
//                     <Subtitle darkText={darkText}>{description}</Subtitle>
//                     <BtnWrap>
//                         {/* <Button to="home">Button</Button> */}
//                     </BtnWrap>
//                 </TextWrapper>
//                 </Column1>
//                 <Column2>
//                 <ImgWrap>
//                     <Img src={img} alt={alt} />
//                 </ImgWrap>
//                 </Column2>
//             </InfoRow>
//         </InfoWrapper>
//         </InfoContainer>
//     </>
//   )
// }

// function InfoSection({ img1, img2, img3, img4, img5, alt }) {
//   return (
//     <>
{
  /* <ImgWrap>
            <Img src={img1} alt={alt}/>
            <Img src={img2} alt={alt}/>
            <Img src={img3} alt={alt}/>
            <Img src={img4} alt={alt}/>
            <Img src={img5} alt={alt}/>
         </ImgWrap> */
}
{
  /* <div className="bigContainer">
        <div className="container1">
          <img src={img2} alt="diabuddy" />
          <img src={img1} alt="dancebox" />
          <img src={img3} alt="stir" />
          <img src={img4} alt="instacat" />
          <img src={img5} alt="hungrytoby" />
        </div>
        <div className="container2">
        </div>
      </div>
    </>
  );
} */
}

function InfoSection({ img1, img2, img3, img4, img5, alt }) {
  return (
    <>
      <h1>Projects</h1>
      <div class="cards">
        <div class="card">
          <h2 class="card-title">Diabuddy</h2>
          <img src={img2} alt="diabuddy" />
          <p class="card-desc">
            Diabetes friendly Carb counter built with the MERN stack.
            <br /> <br />
            Implemented Nutritionix API to create a meal from a list of food
            items to calculate a carb total.
            <br /> <br />
            Launched application in 1 week and presented remotely to 30+
            colleagues.{" "}
          </p>
        </div>
        <div class="card">
          <h2 class="card-title">DanceBox</h2>
          <img src={img1} alt="dancebox" />
          <p class="card-desc">
            Wordpress managed Ecommerce site built for a local dancewear
            business.
            <br /> <br />
            Created products via Canva. Currently manage Ecommerce functionality
            via Square.
            <br /> <br />
            Implemented APIs/themes/plugins to customize product and information
            for the client.
          </p>
        </div>
        <div class="card">
          <h2 class="card-title">Stir</h2>
          <img src={img3} alt="stir" />
          <p class="card-desc">
            Responsive full CRUD Application built with Node, Express, Liquid,
            MongoDb, Mongoose, CSS (Bootstrap), Javascript.
            <br /> <br />
            Implemented multiple APIs to create customizable cocktail libraries
            for each individual use and Implemented User Authorization /
            Authentication.
          </p>
        </div>
        <div class="card">
          <h2 class="card-title">Instacat</h2>
          <img src={img4} alt="stir" />
          <p class="card-desc">
            Instagram like clone for Cat-Lovers built with the MERN stack.
            <br /> <br />
            Collaborated with 3 other developers via Git/Github featuring daily
            standups/standdowns. I acted as designer on this project but also
            assisted with backend logic and profile picture on the navbar
            implementation.
            <br /> <br />
            Launched application in 1 week and presented remotely to 30+
            colleagues.
          </p>
        </div>
        <div class="card">
          <h2 class="card-title">Hungry Hungry Toby</h2>
          <img src={img5} alt="hungry hungry toby" />
          <p class="card-desc">
            Falling objects game featuring my own cat as the main character built with HTML, CSS, and vanilla Javascript
            with Canvas. 
            <br /> <br />
             Launched Application in 5 days and presented to 30+ colleagues remotely.
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
