import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  .ul-header{
    list-style: none;
  }
`

export const Logo = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  span {
    color: ${(props) => props.theme.colors.text};
  }
`

export const PageList = styled.div<{ active?: string; click?: string }>`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;

  a {
    color: ${(props) => props.theme.colors.headerText};
    font-size: 1.2rem;
    cursor: pointer;
    transition: filter 0.2s;
  }

  .pages a:hover {
    filter: brightness(0.7);
  }

  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    z-index: 1000;
    transition: transform 0.2s;
    transform: ${({ active }) =>
      active ? 'translateX(0rem)' : 'translateX(65rem)'};
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    height: 100vh;

    a {
      font-size: 1.5rem;
    }

    img {
      width: 30%;
    }
  }
`

export const Url = styled.div`
  @media (max-width: 960px) {
    position: relative;
    top: 10rem;
    align-items: center;
    text-align: center;
  }
`

export const HeaderSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  button {
    background: none;
    border: 0;
  }

  @media (max-width: 960px) {
    position: relative;
    top: 10rem;
    gap: 10rem;
  }

  @media (max-width: 720px) {
    top: 10rem;
  }
`
