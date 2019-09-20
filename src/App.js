import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import HiddenCharacters from "./HiddenCharacters";
import { Route } from "react-router-dom";
import styled from "styled-components";

const StyleHomePage = styled.main`
  background-color: #202329;
  color: white;
`;

export default function App() {
  const hiddenCharacters = [];
  return (
    <StyleHomePage>
      <Header />
      <HiddenCharacters characters={hiddenCharacters} />
      <Route path="/characters" component={CharacterList} />
    </StyleHomePage>
  );
}
