import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { PostProvider } from './contexts/PostContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
