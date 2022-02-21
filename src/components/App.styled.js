import styled from 'styled-components';

const DefaultStyledApp = styled.section`
    --color-bgcDark: ${props=>props.theme.colorBgcDark};
    --color-bgcLight: ${props=>props.theme.colorBgcLight};
    --color-fontDark: ${props=>props.theme.colorFontDark};
    --color-font: ${props=>props.theme.colorFont};
    --color-line: ${props=>props.theme.colorLine};
    
    padding: 4rem;
    max-width:1000px;
    color: rgb(var(--color-font));
    font-weight: bold;
    & h1 {
        margin-bottom:2rem;
        text-align: center;
        color: rgb(var(--color-Contrast));
    }
`

const StyledApp = styled(DefaultStyledApp)(props=>props.style);

export default StyledApp;