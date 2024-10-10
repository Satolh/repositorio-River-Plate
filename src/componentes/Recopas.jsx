import React from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver';

const arrayRecopasNacionales = [""];
const arrayRecopasInternacionales = [""];



const Recopas = () => {
  return (
    <section className='section-copa-argentina'>

      <HeaderRiver/>

      <div className='container-recopas'>
        <ul className='ul-copas'>
        { arrayRecopasNacionales.map((copa,index)=>(
          <p className='recopas' key={index}> {copa} </p>
          ))
          
          }
        </ul>

      </div>

      <FooterRiver/>

    </section>
  )
}

export default Recopas