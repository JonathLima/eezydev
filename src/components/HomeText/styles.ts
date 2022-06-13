import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;

  h1 {
    position: relative;
    top: 5rem;
    color: ${(props) => props.theme.colors.text};
    font-size: 2.4rem;
    font-weight: 500;
  }
  p {
    position: relative;
    top: 4rem;
    color: ${(props) => props.theme.colors.headerText};

    font-size: 6rem;
    font-weight: bold;
  }

  span {
    position: relative;
    font-size: 1.8rem;
    text-align: right;
    top: 2.5rem;
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 3rem;
    justify-content: center;
    align-items: center;

    h1 {
      position: initial;
      font-size: 2.5rem;
      text-align: left;
      padding: 0 1.5rem;
    }
    p {
      font-size: 5rem;
      right: 1.5rem;
      top: -1.5rem;
    }
    span {
      position: relative;

      right: 1.5rem;
      top: -2.5rem;
    }
  }

  @media (max-width: 520px) {
    h1 {
      width: 85%;
      margin-bottom: 1rem;
    }
    p {
      left: -2rem;
    }
    span {
      margin-right: 1rem;
    }
  }
`
