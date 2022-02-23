import React from 'react';
import StyledInput from './Input.styled';

const Input = (props) => {
    const {value, step, max, min, name, type, onChange, placeholder} = props;
    
    return( 
        <StyledInput type={type} step={step} name={name} min={min} max={max} value={value || ''} onChange={onChange}/>
    )
}

export default Input;