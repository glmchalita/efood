import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './routes'
import { store } from './store'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={Router} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}
