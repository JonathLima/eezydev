import styled from 'styled-components'

styled
export const TechContainer = styled.section`
  h2 {
    color: ${(props) => props.theme.colors.headerText};
    font-size: 6rem;
    font-weight: bold;
  }

  @media (max-width: 960px) {
    margin-top: 20rem;
    h2 {
      font-size: 5rem;
      margin-top: 5rem;
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

export const Techs = styled.div`
  display: grid;
  margin-top: 8rem;
  height: 50vh;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  margin-bottom: 12rem;
`

export const Technologies = styled.div`
  width: 12rem;
  height: 12rem;
  padding: 1rem 0rem;
  //box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.08);
  border-radius: 0.8rem;
  align-items: center;
  filter: transparent;
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    width: 10rem;
    height: 10rem;
  }

  span {
    margin: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.headerText};
  }

  p {
    color: ${(props) => props.theme.colors.headerText};
  }
`
