import styled from 'styled-components';

export const Container = styled.div`
  z-index: 999999999999999999;
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  > div {
    background-color: white;
    max-width: 80%;
    width: 30em;
    padding: 2em;
    color: black;
    border-radius: 0.8em;
  
    em {
      font-size: 1.2em;
      font-weight: bold;
      color: #ff2d00;
      font-style: inherit;
    }
  
    > div {
      display: flex;
      margin: 1.5em 0;
    }
  }

  button {
    border: none;
    background-color: #373737;
    color: white;
    padding: 1em;
    border-radius: 0.8em;
  }

  button:disabled {
    background-color: #a7a7a7;
  }

  input {
    transform: scale(1.3);
  }
`;