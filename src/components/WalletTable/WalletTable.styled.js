import styled from 'styled-components';

const DefaultStyledWalletTable = styled.div`
    padding: 4rem;
    border: solid 1px rgb(var(--color-line));
    & table {
        margin: 0 auto;
        width: 100%;
        border: none;
        border: solid 1px rgba(var(--color-font), .6);
        
        & thead {
        background-color: rgba(var(--color-bgcDark), .9);
        }
    }


    & tr {
        height:5rem;
    }

    
`

const StyledWalletTable = styled(DefaultStyledWalletTable)(props=>props.style)

export default StyledWalletTable;
