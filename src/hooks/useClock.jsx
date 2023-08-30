import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

useClock.propTypes = {

};
function setDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const second = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${second}`
}

function useClock(props) {
    const [time, setTime] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const date = new Date();
            const newTimeString = setDate(date);
            setTime(newTimeString);
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        }
    }, []);

    return { time };
}

export default useClock;