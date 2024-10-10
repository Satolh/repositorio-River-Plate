import React from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver'
import { Link,useParams } from 'react-router-dom'
import data from "../libertadores/clasificados.json"
import dataFases from "../libertadores/fases.json"
import { useEffect,useState } from 'react'



const PartidosLibertadores = () => {

    const [clasificados, setClasificados] = useState(data);
    const [fases, setFases] = useState(dataFases);
    const [fecha, setFecha] = useState(dataFases[0].fecha)
    const [yearCompetition, setYearCompetition] = useState("");
    const [winGame, setWinGame] = useState([])
    const [rival, setRival] = useState()
    useEffect(()=>{
        const value = localStorage.getItem("year")
        if(value){
            setYearCompetition(value)
        }
        console.log(yearCompetition)
        if(yearCompetition){
            console.log(clasificados[yearCompetition])
        }
    },[yearCompetition])

        const partidos = fecha.map((data, index) => ({
            fecha: data,
            local: fases[0].local[index],
            visitante: fases[0].visitante[index],
            resultado: fases[0].resultado[index]
        }));

    // const parseFecha = (fecha) => {
    //     const [dia, mes, anio] = fecha.split('/').map(Number);
    //     const fullYear = anio + 2000;
    //     return new Date(fullYear, mes - 1, dia);
    // };

    const allPartidos = partidos.reduce((acc, partido) => {
        const [day, month, year] = partido.fecha.split('/');
        const fullYear = year;
        
        if (!acc[fullYear]) {
            acc[fullYear] = { faseDeGrupos: [], octavos: [], cuartos: [],semiFinal: [], final:[] };
          }
        if (acc[fullYear].faseDeGrupos.length < 6) {
          acc[fullYear].faseDeGrupos.push(partido);
        }
        else if( acc[fullYear].octavos.length < 2) {
          acc[fullYear].octavos.push(partido);
        }
        else if( acc[fullYear].cuartos.length < 2) {
            acc[fullYear].cuartos.push(partido);
        }
        else if(acc[fullYear].semiFinal.length < 2) {
            acc[fullYear].semiFinal.push(partido);
        } else {
            acc[fullYear].final.push(partido);
        }
        return acc;
    }, {});
        
    const arrayFases = allPartidos[yearCompetition];
    const handleSelectedGame = (gameSelected) =>{
        localStorage.setItem("gameSelected",gameSelected)
        console.log(gameSelected)
        
    }

    useEffect(() => {
        if (yearCompetition) {
            const rivalActual = allPartidos[`${yearCompetition}`];
            setRival(rivalActual);
    
            // Todas las fases que quieras procesar
            const fases = ['faseDeGrupos', 'octavos', 'cuartos', 'semiFinal', 'final'];
    
            let resultadosPorFase = {};
    
            // Iterar sobre cada fase y mapear los resultados
            fases.forEach((fase) => {
                if (rivalActual[fase]) {
                    const resultadosFase = rivalActual[fase].map((partido) => {
                        const [golesLocal, golesVisitante] = partido.resultado.split(" - ").map(Number);
    
                        if (golesLocal > golesVisitante) {
                            return `${partido.local} win`; // El equipo local ganó
                        } else if (golesLocal < golesVisitante) {
                            return `${partido.visitante} win`; // El equipo visitante ganó
                        } else {
                            return "draw"; // Empate
                        }
                    });
                    // Guardar los resultados de esta fase en el objeto
                    resultadosPorFase[fase] = resultadosFase;
                }
            });
    
            setWinGame(resultadosPorFase); // Establecer resultados separados por fase
            console.log(resultadosPorFase.cuartos);
        }
    }, [yearCompetition, fases]);
    
    
    

  return (
        <section className='section-partidos'>

            <HeaderRiver/>
            <h2 className='h2-clasificados'> Clasificados</h2>
            <div className='clasificados-libertadores' >
                {clasificados[yearCompetition]&&
                     clasificados[yearCompetition][0].imgTeam.map((club,index)=>(
                        <img src={club} key={index} alt="escudos de equipo clasificado" className='img-clubs' title={clasificados[yearCompetition][0].nameTeam[index]} />
                         ))
                }
            </div>

             <div className='container-partidos-copa'>
                <div className='container-grupo'>
                    <p className='grupo'> Fase de Grupos </p>
                    <div className='container-partidos'>
                        { arrayFases && winGame.faseDeGrupos &&
                            arrayFases.faseDeGrupos.map((partido,index)=>(
                            <Link className='link-partido' key={index} to={"/DatoPartidosLibertadores"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'> {partido.fecha}</p>
                                    <p className='local'> {partido.local}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.faseDeGrupos[index] === "River Plate win" ? "#0b3016" :  winGame.faseDeGrupos[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.visitante}</p>
                                </div>
                            </Link>
                            ))
                        }
                    </div>
                
                <p className='fase'> Octavos de Final </p>
                 { arrayFases && winGame.octavos && arrayFases.octavos && arrayFases.octavos.length > 0 ? (
                     arrayFases.octavos.map((partido,index)=>(
                         <div className='container-fase' key={index}>
                            <div className='container-partidos'>
                            <Link className='link-partido' key={index} to={"/DatoPartidosLibertadores"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'> {partido.fecha} </p>
                                    <p className='local'> {partido.local}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.octavos[index] === "River Plate win" ? "#0b3016" :  winGame.octavos[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.visitante} </p>
                                </div>
                            </Link>
                            </div>
                        </div>
                    ))
                ):( <p className='msj-eliminado'>River no llego</p>)}
                            <p className='fase'> Cuartos de Final </p>
                {  arrayFases && winGame.cuartos && arrayFases.cuartos && arrayFases.cuartos.length > 0 ? (
                    arrayFases.cuartos.map((partido,index)=>(
                        <div className='container-fase' key={index}>
                            <div className='container-partidos'>
                            <Link className='link-partido' key={index}  to={"/DatoPartidosLibertadores"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'> {partido.fecha} </p>
                                    <p className='local'> {partido.local}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.cuartos[index] === "River Plate win" ? "#0b3016" :  winGame.cuartos[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.visitante} </p>
                                </div>
                            </Link>
                            </div>
                        </div>
                    ))
                ):( <p className='msj-eliminado'>River no llego</p>)}
                            <p className='fase'> Semi Final </p>
                {  arrayFases && winGame.semiFinal && arrayFases.semiFinal && arrayFases.semiFinal.length > 0 ? (
                    arrayFases.semiFinal.map((partido,index)=>(
                        <div className='container-fase' key={index} >
                            <div className='container-partidos'>
                            <Link className='link-partido' key={index}  to={"/DatoPartidosLibertadores"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'> {partido.fecha} </p>
                                    <p className='local'> {partido.local}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.semiFinal[ index] === "River Plate win" ? "#0b3016" :  winGame.semiFinal[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.visitante} </p>
                                </div>
                            </Link>
                            </div>
                        </div>
                    ))
                ):( <p className='msj-eliminado'>River no llego</p>)} 
                    <p className='fase'> Final </p>
                {  arrayFases && winGame.final && arrayFases.final && arrayFases.final.length > 0 ? (
                    arrayFases.final.map((partido,index)=>(
                        <div className='container-fase' key={index}>
                            <div className='container-partidos'>
                            <Link className='link-partido' key={index}  to={"/DatoPartidosLibertadores"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'> {partido.fecha} </p>
                                    <p className='local'> {partido.local}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.final[index] === "River Plate win" ? "#0b3016" :  winGame.final[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.visitante} </p>
                                </div>
                            </Link>
                            </div>
                        </div>
                    ))
                ) : ( <p className='msj-eliminado'>River no llego</p> ) }
            </div>
                </div> 


            <FooterRiver/>

        </section>
  )
}

export default PartidosLibertadores;