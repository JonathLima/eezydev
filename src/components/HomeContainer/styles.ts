import styled from 'styled-components'

export const Container = styled.section`
  display: flexbox;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  height: 80vh;
  margin-top: 5rem;

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
