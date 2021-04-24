import React from 'react'
import logo from '../../images/logo.png';
import './style.css';

const FooterPage = () => {
  return (
    <>
      <div className='Footer'>
        <div className='FooterWrp'>
          <div className='first'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='mid'>
            <p>Now you can join with our Water Qualifying and Prediction Service. Just click below link to our documentation.</p>
            <a href='http://waterqualityapp.herokuapp.com/api' target='_blank' rel="noreferrer">Water Qualifier</a>
          </div>
        </div>
      </div> 
    </>
  )
}

export default FooterPage
