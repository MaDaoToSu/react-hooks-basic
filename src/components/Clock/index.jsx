import React from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {

};


function Clock(props) {
    const { time } = useClock();

    return (
        <div>
            {time}
        </div>
    );
}

export default Clock;