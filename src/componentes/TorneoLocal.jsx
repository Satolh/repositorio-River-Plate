import React from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver'
import { Link } from 'react-router-dom'

const arrayTorneo = [
  "2024",
  "2023",
  "2022",
  "2021",
  "2019/20",
  "2018/19",
  "2017/18",
  "2016/17",
  "2016Tr",
  "2015",
  "2014Tr",
  "2014Fin",
]

const handleClick = (nameTorneo) =>{
  console.log(nameTorneo)
  localStorage.setItem("torneo",nameTorneo)
}

const Torneolocal = () => {
  return (
    <section className='section-torneo'>

      <HeaderRiver/>


      <div className='container-torneos'>
        <ul className='ul-copas'>
        {
              arrayTorneo.map((torneo,index)=>(
                <Link key={index} to={"/PartidosTorneo"}  className='link-torneo'>
                  <p className='torneo' onClick={() => handleClick (torneo)} > {`Torneo Local ${torneo}`} </p>
                </Link>
              ))
            }
        </ul>

      </div>

      <FooterRiver/>

    </section>
  )
}

export default Torneolocal