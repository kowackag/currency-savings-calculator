import styled from 'styled-components';

const DefaultStyledWalletTable = styled.div`
    padding: 4rem;
    border: solid 1px rgb(var(--color-line));

    & table {
        margin: 0 auto;
        width: 100%;
        border: none;
        border: solid 1px rgba(var(--color-font), .6);
        border-collapse:collapse;
        text-align: center;
        
        & thead, tfoot {
        background-color: rgba(var(--color-bgcDark), .9);
        }
    }

    & tr {
        height:5rem;
        padding: 2rem;
        border: solid 1px rgb(var(--color-line));
    }

    & tfoot {
        font-size: 1.6rem;
        font-weight: bold;  
        & .sum-profit {
            font-size:2.5rem;
            color: #D22779;
        }  
    }
    
    & .btn-remove {
        margin: 0.5rem;
    } 
    
`

const StyledWalletTable = styled(DefaultStyledWalletTable)(props=>props.style)

export default StyledWalletTable;
