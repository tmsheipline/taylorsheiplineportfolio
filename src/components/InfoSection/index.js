import React from "react";
import "./InfoSection.css";


function InfoSection({ img1, img2, img3, img4, img5}) {

  return (
    <>
      <div className="projectContainer" id="projects">
      <h1>Projects</h1>
      <div className="cards">
        <div className="card">
          <h2 className="card-title">Diabuddy</h2>
          <img src={img2} alt="diabuddy" />
          <p className="card-desc">
            Diabetes friendly Carb counter built with the MERN stack.
            <br /> <br />
            Implemented Nutritionix API to create a meal from a list of food
            items to calculate a carb total.
            <br /> <br />
            Launched application in 1 week and presented remotely to 30+
            colleagues.
            <br /> <br />
          <button onClick={()=> {window.open('https://diabuddy.netlify.app')}}>Visit Site</button>
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">DanceBox</h2>
          <img src={img1} alt="dancebox" />
          <p className="card-desc">
            Wordpress managed Ecommerce site built for a local dancewear
            business.
            <br /> <br />
            Created products via Canva. Currently manage Ecommerce functionality
            via Square.
            <br /> <br />
            Implemented APIs/themes/plugins to customize product and information
            for the client.
            <br /> <br />
          <button onClick={()=> {window.open('https://shopdancebox.com/')}}>Visit Site</button>
          </p>
        </div>
        <div className="card">
          <h2 className="card-title">Stir</h2>
          <img src={img3} alt="stir" />
          <p className="card-desc">
            Responsive full CRUD Application built with Node, Express, Liquid,
            MongoDb, Mongoose, CSS (Bootstrap), Javascript.
            <br /> <br />
            Implemented multiple APIs to create customizable cocktail libraries
            for each individual use and Implemented User Authorization /
            Authentication.
            <br /> <br />
          <button onClick={()=> {window.open('https://thirstystir.herokuapp.com/')}}>Visit Site</button>
          </p>
        </div>
        {/* <div className="card">
          <h2 className="card-title">Instacat</h2>
          <img src={img4} alt="stir" />
          <p className="card-desc">
            Instagram like clone for Cat-Lovers built with the MERN stack.
            <br /> <br />
            Collaborated with 3 other developers via Git/Github featuring daily
            standups/standdowns. I acted as designer on this project but also
            assisted with backend logic and profile picture on the navbar
            implementation.
            <br /> <br />
            Launched application in 1 week and presented remotely to 30+
            colleagues.
            <br /> <br />
          <button onClick={()=> {window.open('https://instacats-jat.herokuapp.com/')}}>Visit Site</button>
          </p>
        </div> */}
        <div className="card">
          <h2 className="card-title">Hungry Hungry Toby</h2>
          <img src={img5} alt="hungry hungry toby" />
          <p className="card-desc">
            Falling objects game featuring my own cat as the main character built with HTML, CSS, and vanilla Javascript
            with Canvas. 
            <br /> <br />
             Launched Application in 5 days and presented to 30+ colleagues remotely.
             <br /> <br />
          <button onClick={()=> {window.open('https://tmsheipline.github.io/Hungry-Hungry-Toby/')}}>Visit Site</button>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default InfoSection;
