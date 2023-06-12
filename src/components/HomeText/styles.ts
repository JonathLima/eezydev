import styled from 'styled-components'

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: right;
  align-self: center;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 2.4rem;
    text-align: center;
    font-weight: 500;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    .my-name-title {
      font-size: 6.5rem;
      color: ${(props) => props.theme.colors.headerText};
      font-weight: bold;
    }
    span {
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media (max-width: 960px) {
    margin-top: 3rem;
    text-align: center;

    .text-container {
      .my-name-title {
        font-size: 6.5rem;
        color: ${(props) => props.theme.colors.headerText};
        font-weight: bold;
      }
      span {
        font-size: 1.8rem;
        color: ${(props) => props.theme.colors.text};
      }
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 2rem;
    }

    .text-container {
      .my-name-title {
        font-size: 5.2rem;
      }
    }
  }
`
