import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {

};
function setDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const second = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${second}`
}

function Clock(props) {
    const [time, setTime] = useState('');

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            const newTimeString = setDate(date);
            setTime(newTimeString);
        }, 1000);

    }, []);

    return (
        <div>
            {time}
        </div>
    );
}

export default Clock;