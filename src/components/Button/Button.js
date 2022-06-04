import React from 'react';
import StyledButton from './Button.styled';

const Button = (props) => {
  return (
    <StyledButton
      className={props.className}
      data-id={props.id}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
