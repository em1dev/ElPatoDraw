import { DefaultColorStyle, Tldraw } from 'tldraw';
import { DomainChangeWarningModal } from '../DomainChangeWarningModal';
import { Auth } from '@supabase/auth-ui-react';
import { AuthenticationApi } from '@/api/AuthenticationApi';
import { Theme, ThemeSupa } from '@supabase/auth-ui-shared';
import { useTheme } from 'styled-components';
import * as S from './styles';


export const Login = () => {
  const theme = useTheme();

  const CustomTheme = {
    ...ThemeSupa,
    default: {
      ...ThemeSupa.default,
      space: {
        ...ThemeSupa.default.space,
        buttonPadding: '1em',
      },
      borderWidths: {
        ...ThemeSupa.default.borderWidths,
        buttonBorderWidth: '0',
      },
      colors: {
        ...ThemeSupa.default.colors,
        brand: theme.colors.backgroundLight,
        brandButtonText: theme.colors.foreground,
        brandAccent: theme.colors.accent,
        inputBorderFocus: theme.colors.foreground,
        // we only have twitch as a button so we can make it purple here
        defaultButtonBackground: '#e8afff',
        defaultButtonText: '#4d185d',
        defaultButtonBackgroundHover: '#f4daff',
        inputBorderHover: 'white',
        anchorTextHoverColor: theme.colors.foreground,
        inputText: theme.colors.foreground,
        inputLabelText: 'white'
      }
    }
  } as Theme;

  return (
    <div>
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

      <S.LoginContainer>
        <h1>El Pato Draw</h1>

        <Auth
          providers={['twitch']}
          redirectTo={location.origin}
          supabaseClient={AuthenticationApi.supabaseClient}
          appearance={{ theme: CustomTheme }}
        >
        </Auth>
      </S.LoginContainer>
    </div>
  );
};
