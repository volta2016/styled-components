import logo from './logo.svg';
import './App.css';
import styled, { css } from "styled-components";

import { colors } from './styles/globals.js'

const Container =  styled.div`
  color: #fff;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const SubHead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 150px 0 48px;
`;

const Buttons = styled.a`
  background: ${colors.white};
  border-radius: 5px;
  color: ${colors.black};
  color: ${colors.black};
  cursor: pointer;
  height: 48px;
  line-height: 48px;
  padding: 0 64px;
  font-weight: 600px;
  margin: 0 24px;
  font-size: 14px;
  text-decoration: none;

  ${props => 
  props.outline && 
  css`
    background: transparent;
    border: 1px solid ${colors.black};
  `}

  ${props => 
  props.primary && 
  css`
    background: ${colors.primary};
  `}

  ${props => 
  props.secondary && 
  css`
    background: ${colors.secondary};
  `}
`;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Starting Styled Component<span role="img" aria-label="smile">💅</span>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Oficial Documentation 
        </a>
      </header>
      <Container>
          <SubHead>Buttons</SubHead>
          <div className="row">
            <Buttons>Playlist</Buttons>
            <Buttons outline>Playlist</Buttons>
            <Buttons primary>Playlist</Buttons>
            <Buttons secondary>Playlist</Buttons>
          </div>
          <SubHead>Search Bars</SubHead>
      </Container>
    </div>
  );
}

export default App;
