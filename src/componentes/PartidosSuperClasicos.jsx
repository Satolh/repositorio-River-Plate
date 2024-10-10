import React from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver'
import { Link,useParams } from 'react-router-dom'
import dataClasicos from "../clasicos/SuperClasicosYears.json"

import { useEffect,useState } from 'react'



const PartidosSuperClasicos = () => {
    const [fecha, setFecha] = useState([
        "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15",
        "16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"
    ])
    const [teams,setTeams] = useState()

    const [pts, setPts] = useState()

    const [allClasicos, setAllClasicos] = useState(dataClasicos);
    const [yearCompetition, setYearCompetition] = useState("");
    const [superclasico, setSuperclasico] = useState()
    const [winGame, setWinGame] = useState([])


    useEffect(()=>{
        const year = localStorage.getItem("yearClasico")
        console.log(year)
        console.log(allClasicos["2000"])
        if(year){
            setYearCompetition(year)
        }
        // setTorneo(allClasicos[`${yearCompetition}`]);
    },[yearCompetition])

    const handleSelectedGame = (gameSelected,year) =>{
        localStorage.setItem("gameSelectedClasico", gameSelected)
        console.log(gameSelected)

    }

    useEffect(() => {
        if (yearCompetition) {
            const clasicoActual = allClasicos[`${yearCompetition}`];
            console.log(clasicoActual)
            setSuperclasico(clasicoActual);

            const resultados = clasicoActual.resultados.map((resultado, index) => {
                const [golesLocal, golesVisitante] = resultado.split(" - ").map(Number);

                if (golesLocal > golesVisitante) {
                    return `${clasicoActual.local[index]} win`;
                } else if (golesLocal < golesVisitante) {
                    return `${clasicoActual.visitante[index]} win`;
                } else {
                    return 'draw';
                }
            });

            setWinGame(resultados);
            console.log(resultados)
        }
    }, [yearCompetition, allClasicos]);


  return (
      <>
            <HeaderRiver/>
      <section className='section-partidos-superclasicos'>
            <h2 className='year-clasico'> {yearCompetition} </h2>
            <div className='container-torneo container-superclasico'>
                { superclasico &&
                superclasico.local.map((torn,index)=>(
                    <div className='container-info' key={index}>
                        <Link className='link-formation' to={"/datoSuperClasicos"}onClick={()=>{handleSelectedGame(superclasico.fecha[index])}}>
                            <p className='local-torneo local-superclasico'>{torn}</p>
                            <p className='resultado-torneo resultado-superclasico' 
                             style={{
                                 backgroundColor: winGame[index] === "River Plate win" ? "#0b3016" :  winGame[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }}
                                >{superclasico.resultados[index]}</p>
                            <p className='visitante-torneo visitante-superclasico' >{superclasico.visitante[index]}</p>
                            <p className='date-torneo date-superclasico' >{superclasico.fecha[index]}</p>
                        </Link>

                    </div>
                ))
            }
            </div>

            {/* {
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
            } */}


        </section>
            <FooterRiver/>
            </>
  )
}

export default PartidosSuperClasicos;