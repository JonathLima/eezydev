import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  :root{
    --background: #f0f0f5;
    --primary-blue: #6BADFA;
    --secondary-blue:#1163c2;
    --dark-blue:  #003069;
    --normal-text: #1c1c1c;
    --medium-text: #949494;
    --light-text: #ebebeb;
  }

  #__next{
    overflow:hidden;
  }

  *{
     scroll-behavior: smooth;
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px) {
      font-size: 93.75%;
  }

    @media (max-width: 720px){
      font-size: 87.5%;


  }

  body{
    background: ${(props) => props.theme.colors.background};
    transition: background 0.2s;
    -webkit-font-smoothing: antialiased;
  }

  body,input, textarea , select , button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor:pointer;
  }

  a{
    text-decoration: none;
  }


}
`
