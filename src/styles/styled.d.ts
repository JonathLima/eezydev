import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      logo: string
      primary: string
      secondary: string

      background: string
      text: string
      headerText: string
      slider: string
      icons: string
    }
  }
}
