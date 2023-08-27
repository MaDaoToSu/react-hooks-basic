import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

// onSubmit is a function receive to App.js
TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    // get value input to keyboard and set it
    function handleValueChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!onSubmit) return;
        const formValue = {
            title: value,
        }
        onSubmit(formValue);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;