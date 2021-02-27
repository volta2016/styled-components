import logo from './logo.svg';
import './App.css';
import styled from "styled-components";


import { Buttons, SearchBar } from './styles/atoms.js';
import searchIcon  from './svg/search.svg' 

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
          href="https://styled-components.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Styled Components Official Documentation 
        </a>
        <p><em><b>UI Components</b> with styled Components</em></p>
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
          <div className="row">
            <SearchBar>
              <img src={searchIcon} alt="search icon"/>
              <input placeholder="Search for podcats, news, story, etc..." 
                type="text"
              />
            </SearchBar>
          </div>
      </Container>
    </div>
  );
}

export default App;
