import React from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver'
import { Link,useParams } from 'react-router-dom'
import dataFases from "../TorneoLocal/Torneo2023.json"
import tablaData from "../TorneoLocal/Tabla2023.json"
import { useEffect,useState } from 'react'



const PartidosTorneo = () => {
    const [fecha, setFecha] = useState([
        "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15",
        "16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"
    ])
    const [teams,setTeams] = useState()

    const [pts, setPts] = useState()

    const [fases, setFases] = useState(dataFases);
    const [tabla, setTabla] = useState(tablaData)
    const [yearCompetition, setYearCompetition] = useState("");
    const [torneo, setTorneo] = useState()
    const [winGame, setWinGame] = useState([])


    useEffect(()=>{
        const value = localStorage.getItem("torneo")
        if(value){
            setYearCompetition(value)
        }
        setTorneo(fases[`${yearCompetition}`]);
    },[yearCompetition])

    const handleSelectedGame = (gameSelected) =>{
        localStorage.setItem("gameSelectedTorneo", gameSelected)
        console.log(gameSelected)
    }

    useEffect(() => {
        if (yearCompetition) {
            const torneoActual = fases[`${yearCompetition}`];
            setTorneo(torneoActual);

            const resultados = torneoActual.resultado.map((resultado, index) => {
                const [golesLocal, golesVisitante] = resultado.split(" - ").map(Number);

                if (golesLocal > golesVisitante) {
                    return `${torneoActual.local[index]} win`;
                } else if (golesLocal < golesVisitante) {
                    return `${torneoActual.visitante[index]} win`;
                } else {
                    return 'draw';
                }
            });

            setWinGame(resultados);
            console.log(winGame)
        }
        console.log(tabla)
    }, [yearCompetition, fases]);
    
    

  return (
      <>
            <HeaderRiver/>
      <section className='section-partidos-torneo'>
            
            <div className='container-torneo'>
            <h2 className='h2-clasificados'> Equipos</h2>
                { torneo &&
                torneo.local.map((torn,index)=>(
                    <div className='container-info' key={index}>
                            <p className='fecha-torneo'>{`Fecha ${fecha[index]}`}</p>
                        <Link className='link-formation' to={"/datoPartidosTorneo"}onClick={()=>{handleSelectedGame(torneo.date[index])}}>
                            <p className='local-torneo'>{torn}</p>
                            <p className='resultado-torneo' 
                             style={{
                                 backgroundColor: winGame[index] === "River Plate win" ? "#0b3016" :  winGame[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }}
                                >{torneo.resultado[index]}</p>
                            <p className='visitante-torneo' >{torneo.visitante[index]}</p>
                            <p className='date-torneo' >{torneo.date[index]}</p>
                        </Link>

                    </div>
                ))
            }
            </div>

            {
                <section className='container-tabla'>
                    <h2 className='h2-tabla'> Tabla de Posiciones</h2>
                    <div className='tabla'>
                        <div className='div-position div-tabla'>
                            <p className='tabla-p'>#</p>
                            { tabla && tabla[yearCompetition] &&
                                tabla[yearCompetition].map((pos,index)=>(
                                    <p key={index} className='p-position'> {pos.position} </p>
                                ))
                            }
                        </div>
                        <div className='div-tabla'>
                            <p className="tabla-p p-equipo">Equipo</p>
                            {   tabla && tabla[yearCompetition] &&
                                tabla[yearCompetition].map((equipo,index)=>(
                                    <p className='p-name' key={index}>{equipo.datos.name}</p>
                                ))
                            }
                            
                        </div>
                        <div className='div-tabla'>
                            <p className='tabla-p'>PTS</p>
                            {   tabla && tabla[yearCompetition] &&
                                tabla[yearCompetition].map((pts,index)=>(
                                    <p className='p-number-tabla' key={index}>{pts.datos.pts}</p>
                                ))
                            }
                        </div>
                        <div className='div-tabla'>
                            <p className='tabla-p'>PJ</p>
                            {   tabla && tabla[yearCompetition] &&
                                tabla[yearCompetition].map((pj,index)=>(
                                    <p className='p-number-tabla' key={index}>{pj.datos.pj}</p>
                                ))
                            }
                        </div>
                        <div className='div-tabla'>
                            <p className='tabla-p'>PG</p>
                            {   tabla && tabla[yearCompetition] &&
                                tabla[yearCompetition].map((pg,index)=>(
                                    <p className='p-number-tabla' key={index}>{pg.datos.pg}</p>
                                ))
                            }
                        </div>
                        <div className='div-tabla'>
                            <p className='tabla-p'>PE</p>
                            {   tabla && tabla[yearCompetition] &&
                                tabla[yearCompetition].map((pe,index)=>(
                                    <p className='p-number-tabla' key={index}>{pe.datos.pe}</p>
                                ))
                            }
                        </div>
                        <div className='div-tabla'>
                            <p className='tabla-p'>PP</p>
                            {   tabla && tabla[yearCompetition] &&
                                tabla[yearCompetition].map((pp,index)=>(
                                    <p className='p-number-tabla' key={index}>{pp.datos.pp}</p>
                                ))
                            }
                        </div>
                        <div className='div-tabla'>
                            <p className='tabla-p'>GF</p>
                            {   tabla && tabla[yearCompetition] &&
                                tabla[yearCompetition].map((gf,index)=>(
                                    <p className='p-number-tabla' key={index}>{gf.datos.gf}</p>
                                ))
                            }
                        </div>
                        <div className='div-tabla'>
                            <p className='tabla-p'>GE</p>
                            {   tabla && tabla[yearCompetition] &&
                                tabla[yearCompetition].map((gc,index)=>(
                                    <p className='p-number-tabla' key={index}>{gc.datos.gc}</p>
                                ))
                            }
                        </div>
                        <div className='div-tabla'>
                            <p className='tabla-p tabla-p-dif'>DIF</p>
                            {   tabla && tabla[yearCompetition] &&
                                tabla[yearCompetition].map((dif,index)=>(
                                    <p className='p-number-tabla p-dif' key={index}>{dif.datos.dif}</p>
                                ))
                            }
                        </div>
                    </div>
                </section>
            }


        </section>
            <FooterRiver/>
            </>
  )
}

export default PartidosTorneo;