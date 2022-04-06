import styled from 'styled-components'

export const BurgIcon = styled.label`
  display: flex;
  //position: fixed;
  float: right;
  //left: 32rem;
  z-index: 9000;
  flex-direction: column;
  width: 50px;
  cursor: pointer;

  span {
    background: ${(props) => props.theme.colors.headerText};
    border-radius: 10px;
    height: 5px;
    margin: 5px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  span:nth-of-type(1) {
    width: 50%;
  }

  span:nth-of-type(2) {
    width: 100%;
  }

  span:nth-of-type(3) {
    width: 70%;
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(8px, 0px);
  }

  input[type='checkbox']:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  input[type='checkbox']:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 55%;
    transform: translate(20px, -8px) rotatez(45deg);
  }
`
