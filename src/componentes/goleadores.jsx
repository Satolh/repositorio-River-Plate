import React, { useEffect, useState } from 'react'
import goleador from "../JugadoresEstadisticas/goleadores.json"
import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver'

const arrayPos = ["1","2","3","4","5","6","7","8","9","10"]


const Goleadores = () => {


    const [goleadorOrdenado, setGoleadorOrdenado] = useState([])
    const [goleadorLibertadores, setGoleadorLibertadores] = useState([])
    const [goleadorSudamericana, setGoleadorSudamericana] = useState([])
    const [goleadorCopaArgentina,setGoleadorCopaArgentina] = useState([])
    useEffect(() => {
        const arrayGoleador = goleador.total.map(element => ({
            jugador: element[0],
            gol: element[1],
            pj: element[2],
            tor: element[3],
            ci: element[4],
            cn: element[5],
            pr: (element[1] / element[2]).toFixed(2)
        }));
        const arrayGoleadorLibertadores = goleador.libertadores.map(element => ({
            jugador: element[0],
            gol: element[1],
            pj: element[2],
            pr: (element[1] / element[2]).toFixed(2)
        }));
        const arrayGoleadorSudamericana = goleador.copaSudamericana.map(element => ({
            jugador: element[0],
            gol: element[1],
            pj: element[2],
            pr: (element[1] / element[2]).toFixed(2)
        }));
        const arrayCopaArgentina = goleador.copaArgentina.map(element => ({
            jugador: element[0],
            gol: element[1],
            pj: element[2],
            pr: (element[1] / element[2]).toFixed(2)
        }));
        setGoleadorLibertadores(arrayGoleadorLibertadores);
        setGoleadorOrdenado(arrayGoleador);
        setGoleadorSudamericana(arrayGoleadorSudamericana)
        setGoleadorCopaArgentina(arrayCopaArgentina)
        console.log(arrayGoleadorLibertadores)
    }, []);
    






  return (
    <div >
        
        <HeaderRiver/>

    <main className='main-goleadores'>

    <h2 className='subtitle-goleador' >Goleadores Históricos</h2>

        <section className='section-goleadores'>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >#</p>
        {   arrayPos &&
            arrayPos.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-position'> {datos} </p>
                </div>
            ))
        }
        </div>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >Jugador</p>
        {   goleadorOrdenado &&
            goleadorOrdenado.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador-name'> {datos.jugador} </p>
                </div>
            ))
        }
        </div>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >Gol</p>
        {   goleadorOrdenado &&
            goleadorOrdenado.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador'> {datos.gol} </p>
                </div>
            ))
        }
        </div>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >PJ</p>
        {   goleadorOrdenado &&
            goleadorOrdenado.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador'> {datos.pj} </p>
                </div>
            ))
        }
        </div>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >Tor</p>
        {   goleadorOrdenado &&
            goleadorOrdenado.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador'> {datos.tor} </p>
                </div>
            ))
        }
        </div>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >CI</p>
        {   goleadorOrdenado &&
            goleadorOrdenado.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador'> {datos.ci} </p>
                </div>
            ))
        }
        </div>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >CN</p>
        {   goleadorOrdenado &&
            goleadorOrdenado.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador'> {datos.cn} </p>
                </div>
            ))
        }
        </div>
         <div className='container-goleadores'>
        <p className='nombre-goleador' >Pr</p>
        {   goleadorOrdenado &&
            goleadorOrdenado.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador'> {datos.pr} </p>
                </div>
            ))
        }
        </div>
    </section>

            <h2 className='subtitle-goleador' >Goleadores de la Copa Libertadores</h2>
       
        <section className='section-goleadores'>


        <div className='container-goleadores'>
        <p className='nombre-goleador' >#</p>
        {   arrayPos &&
            arrayPos.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-position'> {datos} </p>
                </div>
            ))
        }
        </div>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >Jugador</p>
        {   goleadorLibertadores &&
            goleadorLibertadores.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador-name'> {datos.jugador} </p>
                </div>
            ))
        }
        </div>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >Gol</p>
        {   goleadorLibertadores &&
            goleadorLibertadores.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador'> {datos.gol} </p>
                </div>
            ))
        }
        </div>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >PJ</p>
        {   goleadorLibertadores &&
            goleadorLibertadores.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador'> {datos.pj} </p>
                </div>
            ))
        }
        </div>
        <div className='container-goleadores'>
        <p className='nombre-goleador' >Pr</p>
        {   goleadorLibertadores &&
            goleadorLibertadores.map((datos, index)=>(
                <div key={index} className='container-goleador-dato'>
                            <p className='dato-goleador'> {datos.pr} </p>
                </div>
            ))
        }
        </div>
        

        </section>

        
        <h2 className='subtitle-goleador' >Goleadores de la Copa Sudamericana</h2>
       
       <section className='section-goleadores'>


       <div className='container-goleadores'>
       <p className='nombre-goleador' >#</p>
       {   arrayPos &&
           arrayPos.map((datos, index)=>(
               <div key={index} className='container-goleador-dato'>
                           <p className='dato-position'> {datos} </p>
               </div>
           ))
       }
       </div>
       <div className='container-goleadores'>
       <p className='nombre-goleador' >Jugador</p>
       {   goleadorSudamericana &&
           goleadorSudamericana.map((datos, index)=>(
               <div key={index} className='container-goleador-dato'>
                           <p className='dato-goleador-name'> {datos.jugador} </p>
               </div>
           ))
       }
       </div>
       <div className='container-goleadores'>
       <p className='nombre-goleador' >Gol</p>
       {   goleadorSudamericana &&
           goleadorSudamericana.map((datos, index)=>(
               <div key={index} className='container-goleador-dato'>
                           <p className='dato-goleador'> {datos.gol} </p>
               </div>
           ))
       }
       </div>
       <div className='container-goleadores'>
       <p className='nombre-goleador' >PJ</p>
       {   goleadorSudamericana &&
           goleadorSudamericana.map((datos, index)=>(
               <div key={index} className='container-goleador-dato'>
                           <p className='dato-goleador'> {datos.pj} </p>
               </div>
           ))
       }
       </div>
       <div className='container-goleadores'>
       <p className='nombre-goleador' >Pr</p>
       {   goleadorSudamericana &&
           goleadorSudamericana.map((datos, index)=>(
               <div key={index} className='container-goleador-dato'>
                           <p className='dato-goleador'> {datos.pr} </p>
               </div>
           ))
       }
       </div>
       
       </section>

       <h2 className='subtitle-goleador' >Goleadores de la Copa Argentina</h2>
       
       <section className='section-goleadores'>


       <div className='container-goleadores'>
       <p className='nombre-goleador' >#</p>
       {   arrayPos &&
           arrayPos.map((datos, index)=>(
               <div key={index} className='container-goleador-dato'>
                           <p className='dato-position'> {datos} </p>
               </div>
           ))
       }
       </div>
       <div className='container-goleadores'>
       <p className='nombre-goleador' >Jugador</p>
       {   goleadorCopaArgentina &&
           goleadorCopaArgentina.map((datos, index)=>(
               <div key={index} className='container-goleador-dato'>
                           <p className='dato-goleador-name'> {datos.jugador} </p>
               </div>
           ))
       }
       </div>
       <div className='container-goleadores'>
       <p className='nombre-goleador' >Gol</p>
       {   goleadorCopaArgentina &&
           goleadorCopaArgentina.map((datos, index)=>(
               <div key={index} className='container-goleador-dato'>
                           <p className='dato-goleador'> {datos.gol} </p>
               </div>
           ))
       }
       </div>
       <div className='container-goleadores'>
       <p className='nombre-goleador' >PJ</p>
       {   goleadorCopaArgentina &&
           goleadorCopaArgentina.map((datos, index)=>(
               <div key={index} className='container-goleador-dato'>
                           <p className='dato-goleador'> {datos.pj} </p>
               </div>
           ))
       }
       </div>
       <div className='container-goleadores'>
       <p className='nombre-goleador' >Pr</p>
       {   goleadorCopaArgentina &&
           goleadorCopaArgentina.map((datos, index)=>(
               <div key={index} className='container-goleador-dato'>
                           <p className='dato-goleador'> {datos.pr} </p>
               </div>
           ))
       }
       </div>
       

       </section>

    </main>

        <FooterRiver/>

    </div>
  )
}

export default Goleadores;