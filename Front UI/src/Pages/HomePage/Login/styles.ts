import styled from 'styled-components';


export const LoginContainer = styled.div`

  h1 {
      text-align: center;
  }

  padding: 1.5em;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.colors.background};

  zIndex: 1;
  position: relative;
  max-width: calc(100% - 1.5em);
  width: 30em;
  margin: 5em auto;
`;
