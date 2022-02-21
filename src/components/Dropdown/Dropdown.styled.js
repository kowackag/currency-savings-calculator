import styled, {css} from 'styled-components';

const DefaultStyledDropdown = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
   
    font-size: 1.2rem;
    position: relative;
    border: 1px solid rgb(var(--color-line));
    background-color: white;

    & .form__value {
        position: relative;
        display:inline-block;
        padding: 1rem;
        outline: none;
        border: none;
        color: rgb(var(--color-font));
        cursor: context-menu;
    }

    & .list {
        display: ${props=> !props.active && css`none`};
        position: absolute;
        list-style: none;
        width: 100%;
        z-index:3;
        border: 1px solid rgb(var(--color-line));
        background-color: white;
    }

    & .curr {
        padding:0.4rem;
        cursor: pointer;
    }
`
const StyledDropdown = styled(DefaultStyledDropdown)(props=>props.style);

export default StyledDropdown;