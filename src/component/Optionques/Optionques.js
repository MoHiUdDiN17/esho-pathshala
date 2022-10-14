import React, { useState } from 'react';
import './Optionques.css';
const Optionques = (props) => {
    const op = props.option;
    return (
        <div onClick={() => props.checkans(op)} className='bor'>
            <input type="radio" value="Male" name="gender" /> {op}
        </div>
    );
};

export default Optionques;
