import React from 'react'
import './resume.css'


const resume = ({img6}) => {
  return (
    <>
    <div className='resumeContainer' id='resume'>
    <h1>Resume</h1>
    <div className='container'>
    <img src={img6} className="resume" alt="resume" />
      <div className='content'>
        <h3>Checkout <a href='https://docs.google.com/document/d/1RCAkNLn8doeX1C8EaBukhcUNYRnV7gifjr8I7P11gMA/edit?usp=sharing' className='googleLink' target='_blank' alt='resumelink'>Google Doc</a> for full functionality of Resume</h3>
      </div>
      </div>
    </div>
    </>
  )
}

export default resume