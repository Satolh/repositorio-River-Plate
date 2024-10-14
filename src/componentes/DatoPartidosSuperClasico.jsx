import React, { useEffect, useState } from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver'
import gameDetails from "../clasicos/detailsClasicos.json"
import VideoComponent from './videoComponent'
import { LiaFutbolSolid } from "react-icons/lia";





const DatoPartidosSuperClasico = () => {

  const [detailsGameSelected, setDetailsGameSelected] = useState([]);
  const [nameTorneoLocal, setNameTorneoLocal] = useState(null)
  const [titulares,setTitulares] = useState([])
  const [suplentes, setSuplentes] = useState([])
  const [gameSelected, setGameSelected] = useState([])

  useEffect(()=>{
    setDetailsGameSelected(gameDetails)
    const dateSelected =  localStorage.getItem("gameSelectedClasico")
    const nameClasico = localStorage.getItem("clasico")
    setNameTorneoLocal(nameClasico)
    console.log(dateSelected)
    const partidoSelected = gameDetails.filter(item => item.date == dateSelected);
    setGameSelected(partidoSelected)

  },[])


  useEffect(()=>{
    
  },[])


  useEffect(()=>{
    
    if(gameSelected[0]){
      const titularesNameLocal =  gameSelected[0].local.lineUpName.slice(0,11);
      const titularesNumberLocal = gameSelected[0].local.lineUpNumber.slice(0,11);
      const suplentesNameLocal = gameSelected[0].local.lineUpName.slice(12)
      const suplentesNumberLocal = gameSelected[0].local.lineUpNumber.slice(11)

      const titularesNameVisitante =  gameSelected[0].visitante.lineUpName.slice(0,11);
      const suplentesNameVisitante = gameSelected[0].visitante.lineUpName.slice(12)
      const titularesNumberVisitante = gameSelected[0].visitante.lineUpNumber.slice(0,11);
      const suplentesNumberVisitante = gameSelected[0].visitante.lineUpNumber.slice(11)
        
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
  useEffect(() => {
    console.log(titulares)
  }, [titulares]);

  return (
    <section className='container-dato-partido'>

        <HeaderRiver/>
      { gameSelected[0] &&
        <div className='container-all-games'>
            <h1 className='title-partido'>{"Superclasico"}</h1>
          <section className='container-teams'>
            <div className='container-local'>
              <img src={gameSelected[0].local.localImg} alt="Escudo del equipo Local" className='img-local' />
              <h2 className='name-team'>{gameSelected[0].local.nameTeam}</h2>
            </div>
            <div className='container-info-vs'>
              <p className='vs-date'>{gameSelected[0].date}</p>
              <p className='vs-stadium'>{gameSelected[0].stadium}</p>
              <p className='vs-result'>{gameSelected[0].score}</p>
            </div>
            <div className='container-visitante'>
              <img src={gameSelected[0].visitante.visitanteImg} alt="Escudo del equipo visitante" className='img-visitante' />
              <h2 className='name-team'>{gameSelected[0].visitante.nameTeam}</h2>
            </div>
        </section>
        <div className='container-scorers'>
          { gameSelected[0] &&
            gameSelected[0].scorers.map((goal, index) =>(
              <div className='container-goal' key={index}>
                <p className='goal'>{goal}</p>
                <LiaFutbolSolid/>
              </div>
            ))
          }
        </div>
            { gameSelected[0].penales &&
        <section className='section-penales'>
              <h2 className='h2-penal'>Penales</h2>
        { gameSelected[0] && gameSelected[0].penales &&
          gameSelected[0].penales.teamA.map((penal,index)=>(
            <div className='container-penales' key={index} >
                <div className='penal-teamA'>
                  <p className='penal'>{penal}</p>
                </div>
                <div className='penal-teamB'> 
                  <p className='penal'> {gameSelected[0].penales.teamB[index]}  </p>
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
                <span className='name-entrenador'> Entrenador: {gameSelected[0].local.lineUpName[11]} </span>
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
                <span className='name-entrenador'>Entrenador: { gameSelected[0].visitante.lineUpName[11]} </span>
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
      { gameSelected[0] && gameSelected[0].playVideo &&
        <VideoComponent playVideo={gameSelected[0].playVideo} />
      }
        <FooterRiver/>
     
    </section>
  )
}

export default DatoPartidosSuperClasico;