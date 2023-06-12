import styled from 'styled-components'

export const ProjectContainer = styled.div`
  margin-bottom: 25rem;
  h2 {
    margin-bottom: 10rem;
    color: ${(props) => props.theme.colors.headerText};
    font-size: 6rem;
    font-weight: bold;
    text-align: right;
  }

  .swiper {
    width: 50rem;
    height: 28rem;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
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
    margin-top: 20rem;
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
    margin-top: 90rem;
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
