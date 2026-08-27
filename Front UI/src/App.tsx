import { HomePage } from './Pages/HomePage';
import { AuthenticationApi } from '@Api/AuthenticationApi';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './theme';
import { DomainChangeWarningModal } from './Pages/HomePage/DomainChangeWarningModal';
import { Login } from './Pages/HomePage/Login';

function App() {
  const { isLoading, session } = AuthenticationApi.useSession();

  if (isLoading) return null;

  if (!session) {
    return (
      <ThemeProvider theme={mainTheme} >
        <Login />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <DomainChangeWarningModal />
      <div style={{ height: '100vh', width: '100vw' }}>
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
