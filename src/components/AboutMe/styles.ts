import Styled from 'styled-components'

export const AboutContainer = Styled.section`
    margin-bottom: 5rem;

  h2 {
    color: ${(props) => props.theme.colors.headerText};
    font-size: 6rem;
    font-weight: bold;
    text-align: right;
    margin-bottom: 5rem;
  }



  p{

    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    text-align: left;
  }

  @media (max-width: 960px) {
    margin-top: 20rem;
    h2 {
      font-size: 5rem;
      margin-top: 5rem;
    }
     p{
      text-Align: center;
    }
  }

  @media (max-width: 520px) {
    h2 {
      font-size: 4rem;
      text-align: center;
      margin-left: initial;
      margin-top: 8rem;
    }

  }

`
