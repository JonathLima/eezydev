import styled from 'styled-components'

export const SocialContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: flex-end;

  @media (max-width: 960px) {
    justify-content: center;
  }
`

export const Socials = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    margin-left: 2.5rem;
  }
  svg {
    display: flex;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.colors.headerText};
  }

  @media (max-width: 960px) {
    justify-content: center;

    align-items: center;

    a {
      justify-content: center;
      margin-left: 1.2rem;
      margin-right: 1.2rem;
      svg {
        width: 2rem;
        height: 2rem;
        color: ${(props) => props.theme.colors.headerText};
      }
    }
  }
`

// export const Resume = styled.button`
//   position: relative;
//   right: 15rem;
//   top: 0rem;
//   width: 10rem;
//   flex-shrink: 0;
//   height: 3rem;
//   border: 0;
//   border-radius: 0.25rem;
//   font-size: 1.2rem;
//   font-weight: 500;

//   background: ${(props) => props.theme.colors.headerText};
//   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

//   a {
//     text-decoration: none;
//     color: ${(props) => props.theme.colors.background};
//   }

//   @media (max-width: 960px) {
//     top: 2rem;
//     right: 0;
//     margin-top: 2rem;
//     height: 3rem;
//     text-align: center;
//   }
// `
