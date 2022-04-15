import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes';
import { GlobalStyle, theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
