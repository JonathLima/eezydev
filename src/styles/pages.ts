import styled from 'styled-components'

export const Wrapper = styled.main`
  padding: 0 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const Container = styled.section`
  display: flexbox;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  height: 80vh;
  margin-top: 8rem;

  .user-image {
    .image {
      border-radius: 50%;
    }
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 10rem;

    .user-image {
      margin-top: 5rem;
      .image {
        width: 5rem;
      }
    }
  }
`

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

      top: -1.5rem;
    }
    span {
      position: relative;
      left: -0.5rem;
      top: -2.8rem;
    }
  }

  @media (max-width: 520px) {
    h1 {
      width: 80%;
      margin-bottom: 1rem;
    }
    p {
      left: -1rem;
    }
  }
`

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
  margin-left: 4rem;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    margin-left: 3.2rem;
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.colors.headerText};
  }

  @media (max-width: 960px) {
    position: initial;
    margin-top: 5rem;
    align-items: center;

    a {
      width: 3.5rem;
      height: 3.5rem;
      margin: 0 2rem;

      svg {
        margin-left: initial;
        width: 2.5rem;
        height: 2.5rem;
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

export const TechContainer = styled.section`
  margin-top: 5rem;

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

export const ProjectContainer = styled.div`
  margin-bottom: 25rem;
  h2 {
    margin-bottom: 15rem;
    color: ${(props) => props.theme.colors.headerText};
    font-size: 6rem;
    font-weight: bold;
    text-align: right;
  }

  .swiper {
    width: 50rem;
    height: 28rem;
  }

  .swiper-slide {
    display: flex;
    width: 100%;
    flex-direction: column;
    border-radius: 1.5rem;
    font-weight: bold;
    box-shadow: 0 0 1px transparent;
    background: ${(props) => props.theme.colors.slider};

    img {
      object-fit: cover;
    }

    .projectOptions {
      display: flex;
      height: 5rem;
      justify-content: space-between;
      align-items: center;

      strong {
        color: ${(props) => props.theme.colors.icons};
        font-size: 2rem;
        margin-left: 1.2rem;
      }

      .links-projects {
        display: flex;
        gap: 1rem;
        margin: 0 1.2rem;
        align-items: center;

        a {
          margin: 0rem 0.5rem;
          svg {
            width: 2rem;
            height: 2rem;
            color: ${(props) => props.theme.colors.icons};
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    margin-top: 30rem;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 5rem;
      margin-top: 5rem;
    }

    .swiper {
      width: 35rem;
      height: 20rem;
    }
  }
  @media (max-width: 600px) {
    margin-top: 85rem;
    h2 {
      font-size: 4rem;
      text-align: center;
      margin-left: initial;
      margin-top: 5rem;
    }
    .swiper {
      width: 25rem;
      height: 18rem;
    }
  }
`

export const FooterContaier = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  width: 100%;
  background: ${(props) => props.theme.colors.slider};

  span {
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.background};
  }
`
