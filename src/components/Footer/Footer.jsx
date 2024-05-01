import React from 'react'
import './Footer.css'

import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logooo.jpg'




const Footer = () => {
  return (
  <div className="Footer-container">
   <hr />
   <div className="footer">  
    <div className="social-links">
    <a href=""><img src={Github} alt="" /> </a>
   <a href="https://www.instagram.com/verma.praveen1988/" target={'_blank'}>
  <img src={Instagram} alt=""  />
    </a>
    <a href="">
    <img src={LinkedIn} alt="" />
    </a>
    </div>

    <div className="logo-f">
    <img src={Logo} alt="" />
  </div>
   </div>



  </div>
  )
}

export default Footer