import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../hooks/useMagicColor';
import './Magicbox.scss'

Magicbox.propTypes = {

};

function Magicbox(props) {
    const { color } = useMagicColor();
    return (
        <div className='magic-box'
            style={{ backgroundColor: color }}
        >
            hello
        </div>
    );
}

export default Magicbox;