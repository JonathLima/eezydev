import styled from 'styled-components'

export const SocialContainer = styled.div`
  display: flex;
  position: relative;
  width: 20rem;
  height: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  top: 20rem;
  right: 20rem;

  @media (max-width: 960px) {
    position: initial;
    width: 100%;
    height: 5rem;
  }
`

export const Socials = styled.div`
  display: flex;
  margin-bottom: 8rem;
  width: 20rem;
  justify-content: flex-end;

  a {
    display: flex;
    margin-left: 2.5rem;
  }
  svg {
    display: flex;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.colors.headerText};
  }

  @media (max-width: 960px) {
    position: initial;
    margin-top: 5rem;
    justify-content: center;
    margin-left: 1rem;
    align-items: center;

    a {
      width: 3.5rem;
      height: 3.5rem;
      margin: 0 1.5rem;

      svg {
        margin-left: initial;
        width: 2rem;
        height: 2rem;
        color: ${(props) => props.theme.colors.headerText};
      }
    }
  }
`

export const Resume = styled.button`
  position: relative;
  right: 15rem;
  top: 0rem;
  width: 10rem;
  flex-shrink: 0;
  height: 3rem;
  border: 0;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  font-weight: 500;

  background: ${(props) => props.theme.colors.headerText};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.background};
  }

  @media (max-width: 960px) {
    top: 2rem;
    right: 0;
    margin-top: 2rem;
    height: 3rem;
    text-align: center;
  }
`
