import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import HiddenCharacters from "./HiddenCharacters";
import { Route } from "react-router-dom";

export default function App() {
  const hiddenCharacters = [];
  return (
    <main>
      <Header />
      <HiddenCharacters characters={hiddenCharacters} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
