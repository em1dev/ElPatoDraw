import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5em 1em;
  font-size: 0.9rem;
  opacity: 0.8;

  display: flex;
  align-items: center;
  gap: 0.5em;

  border-top: solid 1px #ffffff24;

  > button {
    margin-left: auto;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.foreground };
    cursor: pointer;
  }
`;