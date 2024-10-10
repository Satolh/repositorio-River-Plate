import React from 'react'
import { FaXTwitter,FaInstagram,FaGithub } from "react-icons/fa6";

const FooterRiver = () => {
  return (
    <footer className='footer'>


        <div className='container-made'>
            <p className='made'>  Made by Satolh </p>
            
            <img src={"assets/corbata-labruna.png"} alt="corbata de Labruna" className='logo-footer'/>
        </div>

        <div className='container-redes'>
          <FaInstagram className='icon-redes'/>
          <FaXTwitter className='icon-redes'/>
          <FaGithub className='icon-redes'/>
        </div>

    </footer>
  )
}

export default FooterRiver