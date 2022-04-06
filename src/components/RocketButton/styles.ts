import styled from 'styled-components'

export const RocketButton = styled.button<{ active?: string }>`
  opacity: ${({ active }) => (active ? '100%' : '0%')};
  position: fixed;
  display: flex;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  width: 5rem;
  animation: fadeIn 0.5s;
  transition: opacity 0.4s;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border: none;
  background: ${(props) => props.theme.colors.headerText};

  border-radius: 50%;
  right: 2rem;
  bottom: 2rem;

  svg {
    color: ${(props) => props.theme.colors.background};
    width: 2rem;
    height: 2rem;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media (max-width: 920px) {
    visibility: hidden;
  }
`
