import styled from 'styled-components'

export const Link = styled.a`
  list-style: none;
`

export const BtnSwitch = styled.button`
  outline: 0;
  border: 0;
  width: 100%;
  justify-content: Center;
  align-items: center;
  cursor: pointer;
  background: none;
  filter: none;

  .btn-dark {
    position: relative;
    top: 0.2rem;
    color: ${(props) => props.theme.colors.headerText};
  }
  .btn-light {
    position: relative;
    top: 0.3rem;
    color: ${(props) => props.theme.colors.headerText};
  }
`
