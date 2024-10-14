import React, { useState,useRef,useEffect } from 'react'
// import { createFileName, useScreenshot } from 'use-react-screenshot'
import html2canvas from 'html2canvas'

import HeaderRiver from './HeaderRiver'
import FooterRiver from './FooterRiver'
import Player from "./Player"
const formaciones = {
  "4-3-3": [
    { id: 1, position: "AR", x: 200, y: 500 },
    { id: 2, position: "LD", x: 365, y: 380 },
    { id: 3, position: "DEF", x: 135, y: 430 },
    { id: 4, position: "DEF", x: 265, y: 430 },
    { id: 5, position: "LI", x: 40, y: 380 },
    { id: 6, position: "MC", x: 200, y: 280 },
    { id: 7, position: "VOl", x: 94, y: 240 },
    { id: 8, position: "VOl", x: 305, y: 240 },
    { id: 9, position: "DEL", x: 40, y: 100 },
    { id: 10, position: "DEL", x: 200, y: 50 },
    { id: 11, position: "DEL", x: 370, y: 100 }
  ],
  "4-4-2": [
    { id: 1, position: "AR", x: 200, y: 500 },
    { id: 2, position: "LD", x: 365, y: 380 },
    { id: 3, position: "DEF", x: 135, y: 430 },
    { id: 4, position: "DEF", x: 265, y: 430 },
    { id: 5, position: "LI", x: 40, y: 380 },
    { id: 6, position: "MC", x: 255, y: 260 },
    { id: 7, position: "VOl", x: 145, y: 260 },
    { id: 8, position: "VOl", x: 370, y: 200 },
    { id: 9, position: "DEL", x: 40, y: 200 },
    { id: 10, position: "DEL", x: 135, y: 70 },
    { id: 11, position: "DEL", x: 265, y: 70 }
  ],
   "4-4-1-1": [
    { id: 1, position: "AR", x: 200, y: 500 },
    { id: 2, position: "LD", x: 365, y: 380 },
    { id: 3, position: "DEF", x: 135, y: 430 },
    { id: 4, position: "DEF", x: 265, y: 430 },
    { id: 5, position: "LI", x: 40, y: 380 },
    { id: 6, position: "MC", x: 255, y: 260 },
    { id: 7, position: "VOl", x: 145, y: 260 },
    { id: 8, position: "VOl", x: 370, y: 200 },
    { id: 9, position: "DEL", x: 40, y: 200 },
    { id: 10, position: "DEL", x: 200, y: 140 },
    { id: 11, position: "DEL", x: 200, y: 50 }
  ],
   "5-3-2": [
    { id: 1, position: "AR", x: 200, y: 500 },
    { id: 2, position: "LD", x: 365, y: 360 },
    { id: 3, position: "DEF", x: 120, y: 415 },
    { id: 4, position: "DEF", x: 280, y: 415 },
    { id: 5, position: "LI", x: 40, y: 360 },
    { id: 6, position: "MC", x: 200, y: 440 },
    { id: 7, position: "VOl", x: 94, y: 240 },
    { id: 8, position: "VOL", x: 200, y: 280 },
    { id: 9, position: "VOL", x: 305, y: 240 },
    { id: 10, position: "DEL", x: 135, y: 70 },
    { id: 11, position: "DEL", x: 265, y: 70 }
  ],
   "3-5-2": [
    { id: 1, position: "AR", x: 200, y: 500 },
    { id: 2, position: "LD", x: 365, y: 280 },
    { id: 3, position: "DEF", x: 100, y: 400 },
    { id: 4, position: "DEF", x: 298, y: 400 },
    { id: 5, position: "LI", x: 40, y: 280 },
    { id: 6, position: "MC", x: 200, y: 440 },
    { id: 7, position: "MC", x: 255, y: 260 },
    { id: 8, position: "VOl", x: 145, y: 260 },
    { id: 9, position: "DEL", x: 200, y: 165 },
    { id: 10, position: "DEL", x: 135, y: 70 },
    { id: 11, position: "DEL", x: 265, y: 70 }
  ],
   "4-2-3-1":[
    { id: 1, position: "AR", x: 200, y: 500 },
    { id: 2, position: "LD", x: 365, y: 380 },
    { id: 3, position: "DEF", x: 135, y: 430 },
    { id: 4, position: "DEF", x: 265, y: 430 },
    { id: 5, position: "LI", x: 40, y: 380 },
    { id: 6, position: "MC", x: 255, y: 260 },
    { id: 7, position: "VOl", x: 145, y: 260 },
    { id: 8, position: "VOl", x: 350, y: 175 },
    { id: 9, position: "DEL", x: 50, y: 175 },
    { id: 10, position: "DEL", x: 200, y: 160 },
    { id: 11, position: "DEL", x: 200, y: 60 }
  ],
};
const formacionesMobile = {
  "4-3-3": [
    { id: 1, position: "AR", x: 160, y: 400 },
    { id: 2, position: "LD", x: 285, y: 315 },
    { id: 3, position: "DEF", x: 110, y: 350 },
    { id: 4, position: "DEF", x: 210, y: 350 },
    { id: 5, position: "LI", x: 40, y: 315},
    { id: 6, position: "MC", x: 160, y: 225 },
    { id: 7, position: "VOl", x: 75, y: 200 },
    { id: 8, position: "VOl", x: 250, y: 200 },
    { id: 9, position: "DEL", x: 45, y: 100 },
    { id: 10, position: "DEL", x: 275, y: 100 },
    { id: 11, position: "DEL", x: 160, y: 50 }
  ],
  "4-4-2": [
    { id: 1, position: "AR", x: 160, y: 400 },
    { id: 2, position: "LD", x: 285, y: 315 },
    { id: 3, position: "DEF", x: 110, y: 350 },
    { id: 4, position: "DEF", x: 210, y: 350 },
    { id: 5, position: "LI", x: 40, y: 315},
    { id: 6, position: "MC", x: 200, y: 210 },
    { id: 7, position: "VOl", x: 120, y: 210 },
    { id: 8, position: "VOl", x: 280, y: 155 },
    { id: 9, position: "DEL", x: 40, y: 155 },
    { id: 10, position: "DEL", x: 210, y: 60 },
    { id: 11, position: "DEL", x: 113, y: 60 }
  ],
   "4-4-1-1": [
    { id: 1, position: "AR", x: 160, y: 400 },
    { id: 2, position: "LD", x: 285, y: 315 },
    { id: 3, position: "DEF", x: 110, y: 350 },
    { id: 4, position: "DEF", x: 210, y: 350 },
    { id: 5, position: "LI", x: 40, y: 315},
    { id: 6, position: "MC", x: 200, y: 210 },
    { id: 7, position: "VOl", x: 120, y: 210 },
    { id: 8, position: "VOl", x: 280, y: 155 },
    { id: 9, position: "DEL", x: 40, y: 155 },
    { id: 10, position: "DEL", x: 160, y: 125 },
    { id: 11, position: "DEL", x: 160, y: 50 }
  ],
   "5-3-2": [
    { id: 1, position: "AR", x: 160, y: 400 },
    { id: 2, position: "LD", x: 285, y: 305 },
    { id: 3, position: "DEF", x: 90, y: 340 },
    { id: 4, position: "DEF", x: 230, y: 340 },
    { id: 5, position: "LI", x: 40, y: 305},
    { id: 6, position: "MC", x: 160, y: 350 },
    { id: 7, position: "VOl", x: 160, y: 225 },
    { id: 8, position: "VOL", x: 240, y: 190 },
    { id: 9, position: "VOL", x: 80, y: 190 },
    { id: 10, position: "DEL", x: 210, y: 60 },
    { id: 11, position: "DEL", x: 110, y: 60 }
  ],
   "3-5-2": [
    { id: 1, position: "AR", x: 160, y: 400 },
    { id: 2, position: "LD", x: 285, y: 230 },
    { id: 3, position: "DEF", x: 90, y: 315 },
    { id: 4, position: "DEF", x: 230, y: 315 },
    { id: 5, position: "LI", x: 40, y: 230},
    { id: 6, position: "MC", x: 160, y: 350 },
    { id: 7, position: "VOl", x: 120, y: 210 },
    { id: 8, position: "VOl", x: 200, y: 210 },
    { id: 9, position: "VOL", x: 160, y: 140 },
    { id: 10, position: "DEL", x: 210, y: 60 },
    { id: 11, position: "DEL", x: 113, y: 60 }
  ],
   "4-2-3-1":[
    { id: 1, position: "AR", x: 160, y: 400 },
    { id: 2, position: "LD", x: 285, y: 315 },
    { id: 3, position: "DEF", x: 110, y: 350 },
    { id: 4, position: "DEF", x: 210, y: 350 },
    { id: 5, position: "LI", x: 40, y: 315},
    { id: 6, position: "MC", x: 200, y: 210 },
    { id: 7, position: "VOl", x: 120, y: 210 },
    { id: 8, position: "VOl", x: 270, y: 140 },
    { id: 9, position: "DEL", x: 50, y: 140 },
    { id: 10, position: "DEL", x: 160, y: 125},
    { id: 11, position: "DEL", x: 160, y: 50 }
  ],
};


  
  
  const CrearFormacion = () => {
  const ref = useRef(null);

  const getImage = () => {
    if (ref.current) {
      html2canvas(ref.current, { useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL('https://media.footalist.com/pitches/bg-pitch-green.jpg');
        const a = document.createElement('a');
        a.href = imgData;
        a.download = 'Formation.jpg';
        a.click();
      }).catch(console.error);
    } else {
      console.error('No se pudo obtener la referencia del elemento.');
    }
  };
  

  const [formacionSeleccionada, setFormacionSeleccionada] = useState("4-3-3");
  const [formacion, setFormacion] = useState(formaciones)
  const [positions, setPositions] = useState(formacion["4-3-3"]);
  const [isDragging, setIsDragging] = useState(null);
  const [nameDt, setNameDt] = useState("DT: Name")
  useEffect(() => {
    if (formacionSeleccionada && formacion) {
      setPositions(formacion[formacionSeleccionada]);
    }
  }, [formacion, formacionSeleccionada]);

  // const handleMouseDown = (idx) => {
  //   setIsDragging(idx);
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(null);
  // };
  // useEffect(() => {
  //   if (formacionSeleccionada) {
  //     setPositions(formacion[formacionSeleccionada]);
  //   }
  // }, [formacionSeleccionada, formacion]);
  

  // const handleMouseMove = (e) => {
  //   if (isDragging !== null) {
  //     const fieldRect = e.currentTarget.getBoundingClientRect();
  //     const newX = e.clientX - fieldRect.left - 20;
  //     const newY = e.clientY - fieldRect.top - 30;
  //     const newPositions = [...positions];
  //     newPositions[isDragging] = { ...newPositions[isDragging], x: newX, y: newY };
  //     setPositions(newPositions);
  //   }
  // };
  const handleStartDrag = (idx) => {
    setIsDragging(idx);
    document.body.classList.add("no-scroll")
  };

  const handleStopDrag = () => {
    setIsDragging(null);
    document.body.classList.remove("no-scroll")
  };

  const handleMove = (clientX, clientY, fieldRect) => {
    if (isDragging !== null) {
      const newX = clientX - fieldRect.left - 40;
      const newY = clientY - fieldRect.top - 40;
      const newPositions = [...positions];
      newPositions[isDragging] = { ...newPositions[isDragging], x: newX, y: newY };
      setPositions(newPositions);
    }
  };

  const handleMouseMove = (e) => {
    const fieldRect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, e.clientY, fieldRect);
  };

  const handleTouchMove = (e) => {
    const fieldRect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0]; // Obtener la primera posición del toque
    handleMove(touch.clientX, touch.clientY, fieldRect);
    
    e.preventDefaut()
  };

  const manejarCambioDeFomacion = (e) => {
    const nuevaFormacion = e.target.value;
    setFormacionSeleccionada(nuevaFormacion);
    setPositions(formacion[nuevaFormacion]);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setFormacion(formacionesMobile);
      } else {
        setFormacion(formaciones);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, [formacionesMobile, formaciones]);
  
  const handleChangeNameDt = (e) => {
    let newValuesDt = [...nameDt];
    newValuesDt = e.target.value;
    setNameDt(newValuesDt);
};
  
    return (
      <>
        <HeaderRiver />
        <section className='section'>
        <div className='container-button'>
          <button className='btn-download' onClick={getImage}> Download </button>
          <select onChange={manejarCambioDeFomacion} className='select' value={formacionSeleccionada}>
            <option value="4-4-2">4-4-2</option>
            <option value="4-3-3">4-3-3</option>
            <option value="4-4-1-1">4-4-1-1</option>
            <option value="5-3-2">5-3-2</option>
            <option value="3-5-2">3-5-2</option>
            <option value="4-2-3-1">4-2-3-1</option>
          </select>
        </div>
          {/* <div className="field" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} ref={ref}> */}
          <div
          className="field"
          onMouseMove={handleMouseMove}
          onMouseUp={handleStopDrag}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleStopDrag}
          ref={ref}
        >
          <input type="text" className='name-dt' value={nameDt} onChange={(e) => handleChangeNameDt(e)}/>
          <p className='spam'> sobreriver.vercel.app </p>
          {/* {positions.map((jugador, index) => (
            <div
              onMouseDown={()=> handleMouseDown(index)}
              key={index}
              className='jugador'
              style={{
                left: `${positions[index].x}px`,
                top: `${positions[index].y}px`,
                position: "absolute",
              }}
            >
              <Player index={index}/>
            </div>
          ))} */}
           {positions.map((jugador, index) => (
            <div
              onMouseDown={() => handleStartDrag(index)}
              onTouchStart={() => handleStartDrag(index)}
              key={index}
              className='jugador'
              style={{
                left: `${positions[index].x}px`,
                top: `${positions[index].y}px`,
                position: "absolute",
              }}
            >
              <Player index={index} />
            </div>
          ))}
        </div>
        
          {/* <div className='container-players'>
            {[...Array(11)].map((_, i) => (
              <input key={i} type='text' className='player-suplente' />
            ))}
          </div> */}
        </section>
        <FooterRiver />
      </>
    );
  }
  
  export default CrearFormacion;