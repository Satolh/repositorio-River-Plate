import React, { useEffect, useState } from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver'
import gameDetails from "../libertadores/matchDetails.json"
import VideoComponent from './videoComponent'
import game from "../libertadores/partidoGame.json"
import { LiaFutbolSolid } from "react-icons/lia";





const DatoPartidoLibertadores = () => {

  const [detailsGameSelected, setDetailsGameSelected] = useState([]);
  const [yearLibertadores, setYearLibertadores] = useState(null)
  const [titulares,setTitulares] = useState([])
  const [suplentes, setSuplentes] = useState([])

  useEffect(()=>{
    const gameSelected =  localStorage.getItem("gameSelected")
    const yearSelected = gameSelected.split("/").splice(2)
    setYearLibertadores(yearSelected)
    console.log(detailsGameSelected[0])
    setDetailsGameSelected(gameDetails.filter((data)=> data.date.includes(gameSelected)))
  },[])
  useEffect(()=>{
    if(detailsGameSelected[0]){
      const titularesNameLocal =  detailsGameSelected[0].local.lineUpName.slice(0,11);
      const titularesNumberLocal = detailsGameSelected[0].local.lineUpNumber.slice(0,11);
      const suplentesNameLocal = detailsGameSelected[0].local.lineUpName.slice(12)
      const suplentesNumberLocal = detailsGameSelected[0].local.lineUpNumber.slice(11)

      const titularesNameVisitante =  detailsGameSelected[0].visitante.lineUpName.slice(0,11);
      const suplentesNameVisitante = detailsGameSelected[0].visitante.lineUpName.slice(12)
      const titularesNumberVisitante = detailsGameSelected[0].visitante.lineUpNumber.slice(0,11);
      const suplentesNumberVisitante = detailsGameSelected[0].visitante.lineUpNumber.slice(11)
        
        setTitulares([
          {local:{nameTitular: titularesNameLocal, numberTitular: titularesNumberLocal}},
          {visitante:{nameTitular: titularesNameVisitante, numberTitular: titularesNumberVisitante}}
        ])
        setSuplentes([
          {local:{nameSuplente: suplentesNameLocal, numberSuplente: suplentesNumberLocal}},
          {visitante:{nameSuplente: suplentesNameVisitante, numberSuplente: suplentesNumberVisitante}}
        ])
        }
  },[detailsGameSelected])
  // useEffect(() => {
  //   console.log(titulares)
  // }, [titulares]);

  return (
    <section className='container-dato-partido'>

        <HeaderRiver/>
      { detailsGameSelected[0] &&
        <div className='container-all-games'>
            <h1 className='title-partido'>{`Copa Libertadores ${yearLibertadores}`}</h1>
          <section className='container-teams'>
            <div className='container-local'>
              <img src={detailsGameSelected[0].local.localImg} alt="Escudo del equipo Local" className='img-local' />
              <h2 className='name-team'>{detailsGameSelected[0].local.nameTeam}</h2>
            </div>
            <div className='container-info-vs'>
              <p className='vs-date'>{detailsGameSelected[0].date}</p>
              <p className='vs-stadium'>{detailsGameSelected[0].stadium}</p>
              <p className='vs-result'>{detailsGameSelected[0].score}</p>
            </div>
            <div className='container-visitante'>
              <img src={detailsGameSelected[0].visitante.visitanteImg} alt="Escudo del equipo visitante" className='img-visitante' />
              <h2 className='name-team'>{detailsGameSelected[0].visitante.nameTeam}</h2>
            </div>
        </section>
        <div className='container-scorers'>
          { detailsGameSelected[0] &&
            detailsGameSelected[0].scorers.map((goal, index) =>(
              <div className='container-goal' key={index}>
                <p className='goal'>{goal}</p>
                <LiaFutbolSolid/>
              </div>
            ))
          }
        </div>
            { detailsGameSelected[0].penales &&
          <section className='section-penales'>
              <h2 className='h2-penal'>Penales</h2>
        { detailsGameSelected[0] && detailsGameSelected[0].penales &&
          detailsGameSelected[0].penales.teamA.map((penal,index)=>(
            <div className='container-penales' key={index} >
                <div className='penal-teamA'>
                  <p className='penal'>{penal}</p>
                </div>
                <div className='penal-teamB'> 
                  <p className='penal'> {detailsGameSelected[0].penales.teamB[index]}  </p>
                </div>
              </div>
          ))
        }
        </section>
        }
        <h2 className='title-formacion'> Formacion </h2>
        <section className='section-lineup'>
              <h2 className='h2-title'>titulares</h2>
            <div className='container-all-titulares'>
              <div className='container-titulares'>
                 {  titulares[0] &&
                  titulares[0].local.nameTitular.map((titular,index)=>(
                    <div key={index} className='container-name-number'>
                      <p className='number'> {titulares[0].local.numberTitular[index]} </p> 
                      <p className='titular'> {titular} </p> 
                    </div>
                  ))
                }
                <span className='name-entrenador'> Entrenador: {detailsGameSelected[0].local.lineUpName[11]} </span>
              </div>
              <div className='container-titulares'>
                 {  titulares[1] &&
                  titulares[1].visitante.nameTitular.map((titular,index)=>(
                    <div key={index} className='container-name-number'>
                      <p className='number'> {titulares[1].visitante.numberTitular[index]} </p> 
                      <p className='titular'> {titular} </p> 
                    </div>
                  ))
                }
                <span className='name-entrenador'>Entrenador: { detailsGameSelected[0].visitante.lineUpName[11]} </span>
              </div>
            </div>
          <h2 className='h2-title'>Suplentes</h2>
          <div className='container-all-suplentes'>
            <div className='container-suplentes'>
              {  suplentes[0] &&
                  suplentes[0].local.nameSuplente.map((suplente,index)=>(
                    <div key={index} className='container-name-number'>
                      <p className='number'> {suplentes[0].local.numberSuplente[index]} </p> 
                      <p className='name'> {suplente} </p> 
                    </div>
                  ))
                }
            </div>
            <div className='container-suplentes'>
              {  suplentes[1] &&
                  suplentes[1].visitante.nameSuplente.map((suplente,index)=>(
                    <div key={index} className='container-name-number'>
                      <p className='number'> {suplentes[1].visitante.numberSuplente[index]} </p> 
                      <p className='name'> {suplente} </p> 
                    </div>
                  ))
                }
            </div>
          </div>
        </section>
        </div>
        }
      {/* { detailsGameSelected[0] && detailsGameSelected[0].playVideo &&
        <VideoComponent playVideo={detailsGameSelected[0].playVideo} />
      } */}
        <FooterRiver/>
     
    </section>
  )
}

export default DatoPartidoLibertadores;