import styled from 'styled-components';

const DefaultStyledInput = styled.input`
    width: 100%;
    display:inline-block;
    padding: 1rem 1rem;
    outline: none;
    border: 1px solid rgb(var(--color-line));
    background-color: white;
    box-shadow: inset 12px 12px 36px white, inset -12px -12px 36px white;
    font-size: 1.4rem;
    color: rgb(var(--color-font));
    
    &:-webkit-autofill {
        box-shadow: inset 12px 12px 36px white, inset -12px -12px 36px white;
        /* -webkit-text-fill-color: white !important; */
    }
`
const StyledInput = styled(DefaultStyledInput)(props=>props.style);

export default StyledInput;