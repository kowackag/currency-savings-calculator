import styled from 'styled-components';

const StyledSubmit = styled.label`
  grid-column: 4/5;
  padding: 1rem;
  border: 2px solid rgb(var(--color-font));
  background-color: white;
  color: rgb(var(--color-font));
  font-weight: bold;
  text-align: center;
  position: relative;
  cursor: pointer;

  & input {
    position: relative;
    border: none;
    background-color: transparent;
    color: transparent;
    font-size: 1.6rem;
    font-weight: bold;
    z-index: -1;
  }

  &::before {
    content: 'Dodaj';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    border: none;
    background-color: rgb(var(--color-font));
    color: white;
    opacity: 0;
    transition: opacity 0.4s ease-out;
    will-change: opacity;
    z-index: 2;
  }

  &:hover::before {
    opacity: 1;
  }
`;
export default StyledSubmit;
