import React from 'react';
import StyledButton from './Button.styled';

const Button = (props) => {
    return( 
        <StyledButton data-id={props.id} onClick={props.onClick}>{props.children}</StyledButton>
    )
}

export default Button;