import styled from 'styled-components';

const StyledInput = styled.input`
  display: block;
  padding: 1rem;
  height: 4rem;
  width: 100%;
  outline: none;
  border: 1px solid rgb(var(--color-line));
  background-color: white;
  color: rgb(var(--color-font));

  &:-webkit-autofill {
    box-shadow: inset 12px 12px 36px white, inset -12px -12px 36px white;
    -webkit-text-fill-color: rgb(var(--color-font)) !important;
  }
`;

export default StyledInput;
