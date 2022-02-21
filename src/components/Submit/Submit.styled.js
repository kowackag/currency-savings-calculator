import styled from 'styled-components';

const DefaultStyledSubmit = styled.label`
    grid-column: 4/5;
    padding: 1rem;
    border: 1px solid rgb(var(--color-line));
    background-color: white;
    color: rgb(var(--color-font));
    font-weight: bold;
    text-align: center;
    position: relative;
    cursor: pointer;

     &::before {
        content: 'Dodaj';
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        padding:1rem;
        border: none;
        background-color: rgb(var(--color-font));
        color: white;
        opacity:0;
        transition: opacity 0.5s ease-out; 
        will-change: opacity;      
    }

    &:hover::before {
        opacity:1;
    }

`

const StyledSubmit = styled(DefaultStyledSubmit)(props=>props.style);

export default StyledSubmit;

