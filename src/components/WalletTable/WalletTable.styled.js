import styled from 'styled-components';

const StyledWalletTable = styled.div`
    padding: 2rem 0;
    border: solid 1px rgb(var(--color-line));
    font-size:1.4rem;

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

    & td, th{
        padding:0.35rem;
    }
    & td:last-child, th:last-child{
        display:none;
    }

    & tfoot {
        font-size: 1.8rem;
        font-weight: bold;  
        & .sum-profit {
            font-size:2.5rem;
            color: #D22779;
        }  
    }
    
    & .btn-remove {
        margin: 0.5rem;
    } 

    @media(min-width: 762px) {
        padding: 3rem;
        font-size:1.4rem;
        & td:last-child, th:last-child{
            display:table-cell;
        }
    }
    
`
export default StyledWalletTable;
