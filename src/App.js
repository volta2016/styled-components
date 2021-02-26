import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

import { colors } from './styles/globals.js'

const Container =  styled.div`
  color: #fff;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .row {
    width: 100%;
    display: flex;
    align-items: center;
  }
`

const SubHead = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 150px 0 48px;
`
const Buttons = styled.a`
  height: 480px;
  line-height: 48px;
  padding: 0 64px;
  font-weight: 600px;
  color: ${colors.black};
  background-color: ${colors.white};
  color: ${colors.black};
  cursor: pointer;
  margin: 0 24px;
`



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
          <SubHead>Search Bars</SubHead>
      </Container>
    </div>
  );
}

export default App;
