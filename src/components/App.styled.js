import styled from 'styled-components';

const StyledApp = styled.section`
    max-width:1200px;
    padding: 2rem 0;
    color: rgb(var(--color-font));
    
    & h1 {
        margin-bottom:2rem;
        text-align: center;
        color: rgb(var(--color-Contrast));
    }

    @media(min-width:762px) {
        padding: 4rem;
    }
`

export default StyledApp;