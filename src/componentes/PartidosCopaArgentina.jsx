import React from 'react'
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver'
import { Link,useParams } from 'react-router-dom'
import data from "../copaArgentina/clasificadosCopaArgentina.json"
import dataFases from "../copaArgentina/CopaArgentina.json"
import { useEffect,useState } from 'react'



const PartidosCopaArgentina = () => {

    const [clasificados, setClasificados] = useState(data);
    const [fases, setFases] = useState(dataFases);
    const [fecha, setFecha] = useState(dataFases[0].date)
    const [yearCompetition, setYearCompetition] = useState("");
    const [rival,setRival] = useState()
    const [winGame, setWinGame] = useState([])
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
                TeamA: fases[0].TeamA[index],
                TeamB: fases[0].TeamB[index],
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
            acc[fullYear] = { treintaidosAvos:[],dieciseisAvos:[], octavos:[], cuartos:[],semiFinal:[], final:[] };
          }
         if (acc[fullYear].treintaidosAvos.length < 1) {
          acc[fullYear].treintaidosAvos.push(partido);
        }
        else if( acc[fullYear].dieciseisAvos.length < 1) {
          acc[fullYear].dieciseisAvos.push(partido);
        }
        else if( acc[fullYear].octavos.length < 1) {
            acc[fullYear].octavos.push(partido);
          }
        else if( acc[fullYear].cuartos.length < 1) {
            acc[fullYear].cuartos.push(partido);
        }
        else if(acc[fullYear].semiFinal.length < 1) {
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
            const fases = ['treintaidosAvos',"dieciseisAvos", 'octavos', 'cuartos', 'semiFinal', 'final'];
    
            let resultadosPorFase = {};
            console.log(rivalActual)
            
            // Iterar sobre cada fase y mapear los resultados
            fases.forEach((fase) => {
                if (rivalActual[fase]) {
                    const resultadosFase = rivalActual[fase].map((partido) => {
                        const [golesLocal, golesVisitante] = partido.resultado.split(" - ").map(Number);
    
                        if (golesLocal > golesVisitante) {
                            return `${partido.TeamA} win`; // El equipo local ganó
                        } else if (golesLocal < golesVisitante) {
                            return `${partido.TeamB} win`; // El equipo visitante ganó
                        } else {
                            return "draw"; // Empate
                        }
                    });
                    // Guardar los resultados de esta fase en el objeto
                    resultadosPorFase[fase] = resultadosFase;
                }
            });
    
            setWinGame(resultadosPorFase);
            console.log(winGame)
        }
    }, [yearCompetition, fases]);


  return (
        <section className='section-partidos'>

            <HeaderRiver/>
            <h2 className='h2-clasificados'> Clasificados</h2>
            <div className='clasificados-copa-argentina' >
                {clasificados[yearCompetition]&&
                     clasificados[yearCompetition][0].imgTeam.map((club,index)=>(
                        <img src={club} key={index} alt="escudos de equipo clasificado" className='img-clubs' title={clasificados[yearCompetition][0].nameTeam[index]} />
                         ))
                }
            </div>

             <div className='container-partidos-copa'>
                <div className='container-grupo'>
                    <p className='grupo'> 32 Avos </p>
                    <div className='container-partidos'>
                        { arrayFases   && winGame.treintaidosAvos &&  arrayFases.treintaidosAvos &&
                            arrayFases.treintaidosAvos.map((partido,index)=>(
                            <Link className='link-partido' key={index} to={"/DatoPartidosCopaArgentina"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'>  {partido.fecha}</p>
                                    <p className='local'> {partido.TeamA}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.treintaidosAvos[index] === "River Plate win" ? "#0b3016" :  winGame.treintaidosAvos[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.TeamB}</p>
                                </div>
                            </Link>
                            ))
                        }
                    </div>
                <p className='fase'> 16 Avos </p>
                 { arrayFases && winGame.dieciseisAvos && arrayFases.dieciseisAvos && arrayFases.dieciseisAvos.length > 0 ? (
                     arrayFases.dieciseisAvos.map((partido,index)=>(
                         <div className='container-fase' key={index}>
                            <div className='container-partidos'>
                            <Link className='link-partido' key={index} to={"/DatoPartidosCopaArgentina"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'>  {partido.fecha} </p>
                                    <p className='local'> {partido.TeamA}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.dieciseisAvos[index] === "River Plate win" ? "#0b3016" :  winGame.dieciseisAvos[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.TeamB} </p>
                                </div>
                            </Link>
                            </div>
                        </div>
                    ))
                ):( <p className='msj-eliminado'>River no llego</p>)}
                
                <p className='fase'> Octavos de Final </p>
                 { arrayFases && winGame.octavos && arrayFases.octavos && arrayFases.octavos.length > 0 ? (
                     arrayFases.octavos.map((partido,index)=>(
                         <div className='container-fase' key={index}>
                            <div className='container-partidos'>
                            <Link className='link-partido' key={index} to={"/DatoPartidosCopaArgentina"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'>  {partido.fecha}</p>
                                    <p className='local'> {partido.TeamA}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.octavos[index] === "River Plate win" ? "#0b3016" :  winGame.octavos[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.TeamB}</p>
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
                            <Link className='link-partido' key={index}  to={"/DatoPartidosCopaArgentina"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'>  {partido.fecha}</p>
                                    <p className='local'> {partido.TeamA}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.cuartos[index] === "River Plate win" ? "#0b3016" :  winGame.cuartos[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.TeamB}</p>
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
                            <Link className='link-partido' key={index}  to={"/DatoPartidosCopaArgentina"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'>  {partido.fecha} </p>
                                    <p className='local'> {partido.TeamA}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.semiFinal[index] === "River Plate win" ? "#0b3016" :  winGame.semiFinal[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.TeamB} </p>
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
                            <Link className='link-partido' key={index}  to={"/DatoPartidosCopaArgentina"} onClick={()=>{handleSelectedGame(partido.fecha)}}>
                                <div className='info-partido'>
                                    <p className='fecha'>  {partido.fecha} </p>
                                    <p className='local'> {partido.TeamA}</p>
                                    <p className='result' style={{
                                 backgroundColor: winGame.final[index] === "River Plate win" ? "#0b3016" :  winGame.final[index] === "draw" ? "#aa901c": "#6c0e0b"
                                }} > {partido.resultado} </p>
                                    <p className='visitante'> {partido.TeamB} </p>
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

export default PartidosCopaArgentina