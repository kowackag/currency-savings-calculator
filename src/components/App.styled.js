import styled from 'styled-components';

const DefaultStyledApp = styled.section`
 --color-BgcDark: ${props=>props.theme.colorBgcDark};
 --color-FontDark: ${props=>props.theme.colorFont};
 --color-Contrast: ${props=>props.theme.colorContrast};

    color: rgb(var(--color-FontDark));

    & h1 {
        color: rgb(var(--color-Contrast));
    }
`

const StyledApp = styled(DefaultStyledApp)(props=>props.style);

export default StyledApp;