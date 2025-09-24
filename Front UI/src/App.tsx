import { HomePage } from './Pages/HomePage';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { AuthenticationApi } from '@Api/AuthenticationApi';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './theme';
import { isProd } from './settings';
import { DomainChangeWarningModal } from './Pages/HomePage/DomainChangeWarningModal';
import { DefaultColorStyle, Tldraw } from 'tldraw';

function App() {
  const { isLoading, session } = AuthenticationApi.useSession();

  if (isLoading) return null;

  if (!session) {
    return (
      <ThemeProvider theme={mainTheme} >
        <div style={{ 
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0
        }} >
          <Tldraw
            inferDarkMode
            hideUi
            onMount={(e) => { 
              e.setStyleForNextShapes(DefaultColorStyle, 'light-violet');
              e.setCurrentTool('draw');
            }}
          />
        </div>
        <DomainChangeWarningModal />
        <div>
          <div style={{
            zIndex: 1,
            position: 'relative',
            height: '50vh',
            maxWidth: '30em',
            width: '100%',
            margin: 'auto'
          }} >
            <h1 style={{ fontSize: '3em', fontWeight: 'bold', textAlign: 'center', margin: '1em' }}>
            El Pato Draw
            </h1>

            <Auth
              redirectTo={isProd ? undefined : 'http://localhost:5173'}
              providers={['twitch']}
              supabaseClient={AuthenticationApi.supabaseClient}
              appearance={{
                theme: ThemeSupa
              }}
              theme='dark'
            >
            </Auth>
          </div>
        </div>
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
