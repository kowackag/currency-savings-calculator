import styled from 'styled-components';

const StyledWalletForm = styled.section`
  background-color: rgb(var(--color-bgcDark));
  padding: 1rem;
  border: 1px solid rgb(var(--color-line));
  border-bottom: none;

  & form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
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
      left: 0;
      font-size: 1rem;
      font-style: italic;
      color: red;
    }
  }

  @media (min-width: 762px) {
    padding: 3rem;
  }
`;
export default StyledWalletForm;
