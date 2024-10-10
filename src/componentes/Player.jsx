import React, { useState } from 'react';
import Camiseta from "./logocamiseta";

function Player({ occupied, index, mouseDown, mouseUp, mouseMove }) {
    const [inputValues, setInputValues] = useState(Array.from({ length: 11 }, (_, i) => `Player${i + 1}`));
    const [inputValueNumber, setInputValueNumber] = useState(["1", "4", "6", "2", "3", "5", "8", "7", "11", "10", "9"]);

    const classBox = occupied ? 'box occupied' : 'box';

    const handleChangeNumber = (index, e) => {
        const newValues = [...inputValueNumber];
        newValues[index] = e.target.value;
        setInputValueNumber(newValues);
    };

    const handleChange = (index, e) => {
        const newValues = [...inputValues];
        newValues[index] = e.target.value;
        setInputValues(newValues);
    };
    const handleFocus = (e) => {
        e.target.select(); // Selecciona todo el contenido del input
      };

    return (
        <div
            className={classBox}
            style={{ cursor: 'pointer' }}>
            <Camiseta/>
            <input
                type='text'
                value={inputValueNumber[index]}
                onChange={(e) => handleChangeNumber(index, e)}
                className='input-number'
            />
            <input
                type='text'
                className='input-titular'
                value={inputValues[index] || ''}
                onChange={(e) => handleChange(index, e)}
                onFocus={handleFocus}
            />
        </div>
    );
}

export default Player;
