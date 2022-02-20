import styled from "styled-components";

const DefaultStyledWalletForm = styled.section`
    background-color: #BCDBEF;
    color: red;
`

const StyledWalletForm = styled(DefaultStyledWalletForm)(props=>props.style)

export default StyledWalletForm;