import React from 'react'
import { useState } from 'react'
import { Link, } from 'react-router-dom'
import { IoMdMenu,IoMdClose  } from "react-icons/io";

const HeaderRiver = () => {

  const [activateMobile, setActivateMobile] = useState(true)

  const classMenu = activateMobile ? "div-ul-mob " : "div-ul-mob  visible-menu" ;
    const classIconOpen = activateMobile ? "icon-open" :"icon-open hidden";
    const classIconCLose = activateMobile ? "icon-close" : "icon-close visible";

  const openMenu = () =>{
    setActivateMobile(!activateMobile)
  }
  const closeMenu = () =>{
    setActivateMobile(!activateMobile)
  }

  return (
    <header className='header'>
      <section className='header-section'>

      <div className='container-logo'>
        <Link to={"/"}>
          <img src="https://www.cariverplate.com.ar/images/logo-river.png?cache=a57" alt="Escudo de River Plate" className='logo-escudo'  />
        </Link>
        <h1 className='header-title'> El Mas Grande Lejos</h1>
      </div>
    { 
      <div className='container-category'>
        <ul className='ul'> 
          <Link className='link' to="/Libertadores" >Copa Libertadores</Link>
          <Link className='link' to="/TorneoLocal" >Torneo Local</Link>
          <Link className='link' to="/CopaArgentina" >Copa Argentina</Link>
          <Link className='link' to="/SuperClasicos" >SuperClásicos</Link>
          <Link className='link' to="/Plantel" >Plantel</Link>
          <Link className='link' to="/Goleadores" >Goleadores</Link>
          <Link className='link' to="/Camisetas" >Camisetas</Link>
          <Link className='link' to="/Formacion" >Crear 11</Link>
        </ul>
    </div>
      }
        <IoMdMenu className={classIconOpen} onClick={openMenu}/>
        <IoMdClose className={classIconCLose} onClick={closeMenu}/>

      <div className={classMenu}>
        <ul className="ul-mob"> 
          <Link className='link-mob' to="/Libertadores" >Copa Libertadores</Link>
          <Link className='link-mob' to="/TorneoLocal" >Torneo Local</Link>
          <Link className='link-mob' to="/CopaArgentina" >Copa Argentina</Link>
          <Link className='link-mob' to="/Recopas" >Recopas</Link>
          <Link className='link-mob' to="/SuperClasicos" >SuperClásicos</Link>
          <Link className='link-mob' to="/Plantel" >Plantel</Link>
          <Link className='link-mob' to="/Goleadores" >Goleadores</Link>
          <Link className='link-mob' to="/Camisetas" >Camisetas</Link>
          <Link className='link-mob' to="/Formacion" >Crear 11</Link>
        </ul>
    </div>
    </section>

<div className='bandera'></div>
    </header>
  )
}

export default HeaderRiver