import React, { useState } from 'react';
import './style.scss';

ColorBox.propTypes = {

};


function getRandomColor() {
    // init list color
    const lstColor = ['deeppink', 'blue', 'green', 'black', 'red'];
    // get random number <=5
    // Math.trunc : get the integer part of the decimal
    // Math.random : random about 0.1 - 0.99 and multiplication with a integer to limit random number 
    const random = Math.trunc(Math.random() * 5);
    // return any index in lstCorlor
    return lstColor[random];
}

function ColorBox() {


    const [color, setColor] = useState(() => {
        //init first color with local storage 
        //if local storage by 0 The first color will be deeppink
        const initColor = localStorage.getItem('color-box') || 'deeppink';
        console.log(initColor);
        return initColor;
    });

    function handleChangeColor() {
        //get randomCorlor
        const randomColor = getRandomColor();
        // Set color
        setColor(randomColor);
        // add random color to local Storage
        localStorage.setItem('color-box', randomColor);
    }

    return (
        <div className='color-box'
            style={{ backgroundColor: color }}
            //when click set number
            onClick={handleChangeColor}
        >
        </div>
    );
}

export default ColorBox;