import React, { useEffect, useState } from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver';
import { Link} from 'react-router-dom';
import alllClasico from "../clasicos/SuperClasicosYears.json"
import allClas from "../clasicos/allSuperClasicos.json"
import historial from "../clasicos/historialSuperclasicos.json"
import { PiOrange, PiOrangeBold } from 'react-icons/pi';

const SuperClasicos = () => {

  const [arraySuperclasico ,setArraySuperclasico]  =  useState([
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
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
  ])
  const [clasico, setClasico] = useState([allClas])
  const [filter, setFilter] = useState(false)
  const [allClasico, setAllClasico] = useState([alllClasico])
  const [winGame,setWinGame] = useState()
  const handleClick = (year) =>{
    console.log(year)
    localStorage.setItem("yearClasico",year)
  }

  const onlytest = []

  const handleAllSuperclasicos =()=>{
   setFilter(true)

  }
  const handleSuperclasicosYear =()=>{
    setFilter(false)
 
   }
  useEffect(()=>{
    Object.keys(allClasico[0]).forEach(year => {
      allClasico[0][year].resultados.forEach((resultado, index) => {
        onlytest.push(resultado)
      });
    })
  },[allClasico])

  const handleSelectedGame = (gameSelected,year) =>{
    localStorage.setItem("gameSelectedClasico", gameSelected)
    console.log(gameSelected)

}
useEffect(() => {
  if (allClasico) {
      const clasicoActual = allClas;
      console.log(clasicoActual)
      const resultados = clasicoActual.resultados.map((resultado, index) => {
          const [golesLocal, golesVisitante] = resultado.split(" - ").map(Number);
          if (golesLocal > golesVisitante) {
              return `${clasicoActual.localTeams[index]} win`;
          } else if (golesLocal < golesVisitante) {
              return `${clasicoActual.visitanteTeams[index]} win`;
          } else {
              return 'draw';
          }
      });

      setWinGame(resultados); }
}, [ allClasico]);

  return (
    <section className='section-superclasicos'>
      
      <HeaderRiver/>

      <div className='container-chose'>
        <button className='btn-all btn-clasico' onClick={handleAllSuperclasicos} >Todos</button>
        <button className='btn-year btn-clasico' onClick={handleSuperclasicosYear}>Por Años</button>
      </div>

      <h2 className='title-clasico'> Todos los Superclasicos del 2000 en adelante </h2>

      <div className='container-superclasicos'>
      { historial &&

        <div className='container-historial'>

            <h3 className='title-historial'> Historial River vs Boca  </h3>

          <div className='container-img-historial'>
            <img className='escudo-historial' src={historial.historial.River} alt="Escudo del Club Atletico River Plate" />
            <img className='escudo-historial' src={historial.historial.Boca} alt="Escudo del Club Atletico Boca Juniors" />
          </div>

            <p className='p-historial' > Jugaron  {historial.historial.AllGames} Veces </p>
            <p className='p-historial' > River ganó {historial.historial.WinRiver} Veces</p>
            <p className='p-historial' > Boca ganó {historial.historial.WinBoca} Veces</p>
            <p className='p-historial' > Empataron {historial.historial.Empates} Veces </p>
        
        </div>
      }

        <ul className='ul-superclasico-year'>
            { arraySuperclasico && !filter &&
              arraySuperclasico.map((clasico,index)=>(
                <Link key={index} to={"/PartidosSuperClasicos"}  className='link-superclasicos'>
                  <p className='super-clasicos' onClick={() => handleClick (clasico)} > {`Super Clasicos ${clasico}`} </p>
                </Link>
              ))
            }
          </ul>
          { clasico && filter && (
          <div className='container-torneo container-superclasico'>
            { clasico[0] && 
            clasico[0].localTeams.map((_, index) => (
              <div className='container-info' key={index}>
                <Link className='link-formation' 
                       to={"/datoSuperClasicos"} 
                       onClick={() => handleSelectedGame(clasico[0].fechas[index])}>
                    <p className='local-torneo local-superclasico'>{clasico[0].localTeams[index]}</p>
                    <p className='resultado-torneo resultado-superclasico' 
                                   style={{
                                        backgroundColor: winGame[index] === "River Plate win" ? "#0b3016" :  winGame[index] === "draw" ? "#aa901c": "#6c0e0b"
                                        }}
                                        >{clasico[0].resultados[index]}</p>
                    <p className='visitante-torneo visitante-superclasico'>{clasico[0].visitanteTeams[index]}</p>
            <p className='date-torneo date-superclasico'>{clasico[0].fechas[index]}</p>
                  </Link>
               </div>
             ))}
            </div>
         )}
      </div>

      <FooterRiver/>
      
    </section>


    
  )
}

export default SuperClasicos;