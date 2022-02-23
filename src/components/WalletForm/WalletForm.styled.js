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
        row-gap: 4rem;
    }

    & .box {
        display: grid;
    }
`

const StyledWalletForm = styled(DefaultStyledWalletForm)(props=>props.style)

export default StyledWalletForm;