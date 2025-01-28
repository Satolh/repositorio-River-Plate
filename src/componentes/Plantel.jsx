import React, { useEffect, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver';
import plantel from "../plantel/plantel.json"
import plantelInfo from "../plantel/plantelDetails.json"


const Plantel = () => {

    const [arqueros, setArqueros] = useState([])
    const [defensores, setDefensores] = useState([])
    const [mediocampistas, setMediocampista] = useState([])
    const [delanteros, setDelanteros] = useState([])
    const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null)
    const [closeInfo,setCloseInfo] = useState(true)
    const dataPlantel = plantel;
    const detailsPlantel = plantelInfo;

    console.log(detailsPlantel)

    useEffect(() => {
        detailsPlantel.forEach(element => {
            if (element.info.includes("Arquero")) {
                setArqueros(prevArqueros => {
                    return prevArqueros.some(arq => arq.name === element.name) ? prevArqueros : [...prevArqueros, element];
                });
            } else if (element.info.includes("Defensor")) {
                setDefensores(prevDefensores => {
                    return prevDefensores.some(def => def.name === element.name) ? prevDefensores : [...prevDefensores, element];
                });
            } else if (element.info.includes("Mediocampista")) {
                setMediocampista(prevMediocampista => {
                    return prevMediocampista.some(med => med.name === element.name) ? prevMediocampista : [...prevMediocampista, element];
                });
            } else if (element.info.includes("Delantero")) {
                setDelanteros(prevDelanteros => {
                    return prevDelanteros.some(del => del.name === element.name) ? prevDelanteros : [...prevDelanteros, element];
                });
            }
        });
    }, [detailsPlantel]);
    
    console.log(detailsPlantel)


    const obtenerInformacionAdicional = (infoJugador) =>{
        setJugadorSeleccionado(infoJugador)
        setCloseInfo(true)
        console.log(jugadorSeleccionado)
    }   

    const handleCloseInfo = ()=>{
        setCloseInfo(false)
    }


  return (
    <div>   
        <HeaderRiver/>

        <main className='main-plantel'>

            <h1 className='title-plantel'> Plantel de la Primera de River Plate </h1>
        
        <section className='section-plantel'>
                <h2 className='subtitle-jugador'> Arqueros </h2>
            <div className='container-plantel-jugadores'> 
                { arqueros.map((jugador,index)=>(
                    <div className='container-info-jugador' key={index} onClick={()=>obtenerInformacionAdicional(jugador)}>
                        <p className='plantel-number-jugador'>{jugador.number}</p>
                        <img src={jugador.img} alt="" className='plantel-img-jugador'/>
                        <p className='plantel-name-jugador'>{jugador.name}</p>
                        {/* {   jugadorSeleccionado &&
                            jugador.info.map((info, andex)=>(
                            <div className='container-new-info' key={andex}>
                                <p>{info[0]}</p>
                            </div>
                            ))
                        } */}
                    </div>
                    ))
                }
            </div>
            <h2 className='subtitle-jugador'> Defensores </h2>
            <div className='container-plantel-jugadores'> 
                { defensores.map((jugador,index)=>(
                    <div className='container-info-jugador' key={index} onClick={()=>obtenerInformacionAdicional(jugador)}>
                        <p className='plantel-number-jugador'>{jugador.number}</p>
                        <img src={jugador.img} alt="" className='plantel-img-jugador'/>
                        <p className='plantel-name-jugador'>{jugador.name}</p>
                    </div>
                    ))
                }
            </div>
            <h2 className='subtitle-jugador'> Mediocampistas </h2>
            <div className='container-plantel-jugadores'> 
                { mediocampistas.map((jugador,index)=>(
                    <div className='container-info-jugador' key={index} onClick={()=>obtenerInformacionAdicional(jugador)}>
                        <p className='plantel-number-jugador'>{jugador.number}</p>
                        <img src={jugador.img} alt="" className='plantel-img-jugador'/>
                        <p className='plantel-name-jugador'>{jugador.name}</p>
                    </div>
                    ))
                }
            </div>
            <h2 className='subtitle-jugador'> Delanteros </h2>
            <div className='container-plantel-jugadores'> 
                { delanteros.map((jugador,index)=>(
                    <div className='container-info-jugador' key={index} onClick={()=>obtenerInformacionAdicional(jugador)}>
                        <p className='plantel-number-jugador'>{jugador.number}</p>
                        <img src={jugador.img} alt="" className='plantel-img-jugador'/>
                        <p className='plantel-name-jugador'>{jugador.name}</p>
                    </div>
                    ))
                }
            </div>
        </section>
        
        { closeInfo && jugadorSeleccionado &&       
            <div className='container-info-adi' >
                <IoIosClose className='icon-close-info' onClick={handleCloseInfo}/>
                <img src={jugadorSeleccionado.img} alt=""  className='img-info'/>
                <div className='container-info-selected'>
                    <p className='name-jugador-seleccionado'> {jugadorSeleccionado.name} </p>
                    <p className='number-jugador-seleccionado'>  {jugadorSeleccionado.number} </p>

                    <div className='container-info-detallada'>
                        <div className='div-info '>
                            <p className='p-text'>Posición: </p>
                            <p className='p-medidas'> {jugadorSeleccionado.info[0]}</p>
                        </div>
                        <div className='div-info '>
                            <p className='p-text'>Fecha de nacimiento: </p>
                            <p className='p-medidas'> {jugadorSeleccionado.info[1]}</p>
                        </div>
                        <div className='div-info '>
                            <p className='p-text'>Nacionalidad:</p>
                            <p className='p-medidas'> {jugadorSeleccionado.info[2]}</p>
                        </div>
                        <div className='div-info '>
                            <p className='p-text'>Estatura y peso: </p>
                            <p className='p-medidas'> {jugadorSeleccionado.info[3]}</p>
                        </div>
                        <div className='div-info '>
                            <p className='p-text'>Pierna Habíl: </p>
                            <p className='p-medidas'> {jugadorSeleccionado.info[4]}</p>
                        </div>
                        
                    </div>

                </div>

            </div>
            }

        </main>

        <FooterRiver/>
    </div>
  )
}

export default Plantel