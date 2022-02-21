import React from 'react';
import StyledInput from './Input.styled';

const Input = (props) => {
    const {value, step, max, name, type, onChange, placeholder} = props;
    
    return( 
        <StyledInput type={type} step={step} name={name} max={max} value={value || ''} onChange={onChange}/>
    )
}

export default Input;