import React from 'react';
import StyledSubmit from './Submit.styled';

const Submit = (props) => {
    return( 
        <StyledSubmit type={props.type}>{props.children}</StyledSubmit>
    )
}

export default Submit;