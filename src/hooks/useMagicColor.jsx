import { useEffect, useState } from 'react';

useMagicColor.propTypes = {

};

function randomColor() {
    const lstColor = ['black', 'red', 'green', 'deeppink'];
    const random = Math.trunc(Math.random() * lstColor.length);
    return lstColor[random];
}

function useMagicColor(props) {
    const [color, setColor] = useState('deeppink');
    useEffect(() => {
        setInterval(() => {
            setColor(randomColor());
        }, 1000);
    }, []);

    return { color }
}

export default useMagicColor;