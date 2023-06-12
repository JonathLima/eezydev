import styled from 'styled-components'

export const FooterContaier = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  width: 100%;
  background: ${(props) => props.theme.colors.slider};

  span {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.background};
  }
`
