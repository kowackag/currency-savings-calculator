import styled, {css} from 'styled-components';

const StyledDropdown = styled.div`
    position: relative;
    border: 1px solid rgb(var(--color-line));
    background-color: white;
    font-size: 1.2rem;

    & .form__value {
        position: relative;
        display:inline-block;
        padding: 1rem;
        height: 4rem;
        width:100%;
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

export default StyledDropdown;