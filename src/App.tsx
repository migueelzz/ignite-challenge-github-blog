import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GitHubProvider } from './contexts/GitHubContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GitHubProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GitHubProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
