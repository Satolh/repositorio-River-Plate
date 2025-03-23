import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver'

const arrayCopaArgentina = [
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2021,
  2022,
  2023,
  2024,
  2025
]

const CopaArgentina = () => {


  const handleClick = (year) =>{
    console.log(year)
    localStorage.setItem("year",year)
  }
  
  // useEffect(()=>{},[])


  return (
    <section className='section-copa-argentina'>

      <HeaderRiver/>

      <div className='container-copa-argentina'>
      <ul className='ul-copas'>
            {
              arrayCopaArgentina.map((copa,index)=>(
                <Link key={index} to={"/PartidosCopaArgentina"}  className='link-copaArgentina'>
                  <p className='copaArgentina' onClick={() => handleClick (copa)} > {`Copa Argentina ${copa}`} </p>
                </Link>
              ))
            }
          </ul>

      </div>

      <FooterRiver/>

    </section>


  )
}

export default CopaArgentina