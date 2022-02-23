import styled from "styled-components";

const DefaultStyledWalletForm = styled.section`
    background-color: rgb(var(--color-bgcDark));
    padding: 3rem;
    border: 1px solid rgb(var(--color-line));
    border-bottom: none;

    & form {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 2rem;
        row-gap: 2rem;
    }

    & .label {
        font-weight: bold;
        font-size: 1.4rem;
    }

    & .box {
        display: grid;
        position: relative;
        padding-bottom: 2.5rem;

        & .err {
            position: absolute;
            bottom: 0;
            left:0;
            font-size: 1rem;
            font-style: italic;
            color:red;
        }
    }

`

const StyledWalletForm = styled(DefaultStyledWalletForm)(props=>props.style)

export default StyledWalletForm;