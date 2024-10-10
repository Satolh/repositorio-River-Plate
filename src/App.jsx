import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import HeaderRiver from './componentes/HeaderRiver';
import FooterRiver from './componentes/FooterRiver';



const fotosRiver = [
  "https://pbs.twimg.com/media/GEIRuN5XAAAigwo?format=jpg&name=large",
  "https://pbs.twimg.com/media/F7HzGANXUAAjcGO?format=jpg&name=medium",
]

const array = [
  "1. Roberto Carlos Abbondanzieri",
  "2. Rolando Carlos Schiavi",
  "3. Clemente Juan Rodríguez",
  "14. Luis Amaranto Perea",
  "20. Javier Alejandro Villarreal",
  "6. Nicolás Andrés Burdisso",
  "7. Guillermo Barros Schelotto",
  "8. Diego Sebastián Cagna",
  "9. Carlos Alberto Tévez",
  "19. Pablo Martín Ledesma",
  "11. Fabián Andrés Vargas",
  "12. Wilfredo Daniel Caballero",
  "4. Pablo Ezequiel Jerez",
  "5. Pablo Sebastián Álvarez",
  "17. Franco Darío Cangele",
  "21. Daniel Antonio Barijho",
  "24. Miguel Eduardo Caneo"
]


const App = () => {

    const [lil, setLil] = useState([])  
    const [lal, setLal] = useState([])
  
  useEffect(()=>{
    const numbersArray = [];
    const namesArray = [];
    
// Arrays vacíos para números y nombres

// Iteramos el array original
array.forEach(item => {
  const [number, ...nameParts] = item.split(" ");
  const firstNameInitial = nameParts[0][0]; // Primera letra del primer nombre
  const lastName = nameParts[nameParts.length - 1]; // Apellido
  numbersArray.push(number.replace(".", "")); // Agregamos el número al array
  namesArray.push(`${firstNameInitial}. ${lastName}`); // Agregamos el nombre abreviado al array
});
setLal(numbersArray)
setLil(namesArray)

console.log("Números: ", numbersArray);
console.log("Nombres: ", namesArray);
  },[])


  return (
    <>

      <HeaderRiver/>
    <main className='main'>
          <div className='banda'></div>

      <div className='container-info'>
        <p className='paragraph-info'> Esta es un pagina creada con el fin de recolectar todos los partidos que se puedan del Club Atletico River Plate.</p>
      </div>
        <div className='container-image'>
          {
            fotosRiver.map((img,index)=>(
              <img src={img} alt="Imagen de River" key={index} className='img-river'/>
            ))
          }
        </div>

          <div>

          {/* {lil.map((lol,index)=>(
              <p className='lo'> {`"${lol}",`} </p>
            ))
          }
             {
            lal.map((lol,index)=>(
              <p className='lo'> {`"${lol}",`} </p>
            ))
          } */}
            


          </div>

    </main>

    <FooterRiver/>
   
    </>
  
  )

}

export default App