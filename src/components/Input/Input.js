import React from 'react';
import StyledInput from './Input.styled';

const Input = (props) => {
    const {value, name, onChange, placeholder} = props;
    
    return( 
        <StyledInput name={name} placeholder={placeholder} value={value || ''} onChange={onChange}/>
    )
}

export default Input;