import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
