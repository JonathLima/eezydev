import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10rem;

  margin-top: 5rem;

  .user-image {
    .image {
      border-radius: 50%;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    align-items: center;

    .user-image {
      .image {
        width: 420px;
        height: 420px;
      }
    }
  }
`
