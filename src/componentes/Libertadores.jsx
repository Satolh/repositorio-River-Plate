import React, { useEffect, useState } from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver';
import { Link} from 'react-router-dom';

const arrayLibertadores = [
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2023,
  2024,
]
;



const Libertadores = () => {

  // const [copaYear, setCopaYear] = useState()

  const handleClick = (year) =>{
    console.log(year)
    localStorage.setItem("year",year)
  }

  return (
    <section className='section-libertadores'>
      
      <HeaderRiver/>

      <div className='container-libertadores-year'>
        <ul className='ul-copas'>
            {
              arrayLibertadores.map((copa,index)=>(
                <Link key={index} to={"/PartidosLibertadores"}  className='link-libertadores'>
                  <p className='libertadores' onClick={() => handleClick (copa)} > {`Libertadores ${copa}`} </p>
                </Link>
              ))
            }
          </ul>
      </div>

      <FooterRiver/>
      
    </section>


    
  )
}

export default Libertadores;