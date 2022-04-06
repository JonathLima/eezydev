import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import dark from 'styles/themes/dark'
import light from 'styles/themes/light'
// Import Swiper styles

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <>
      <Head>
        <title>EEZY.DEV | Portfolio</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f0f0f5" />
        <meta name="description" content="Portfolio" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  )
}

export default App
