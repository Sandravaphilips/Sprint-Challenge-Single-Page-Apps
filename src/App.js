import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import HiddenCharacters from "./HiddenCharacters";
import { Route } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./components/SearchForm";
import axios from 'axios';

const StyleHomePage = styled.main`
  background-color: #202329;
  color: white;
`;

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response =>{
      const characterList = response.data.results
      // console.log(characterList)
      setCharacters(characterList)
    })
    .catch(err => console.log(err))  
  }, []);
  const hiddenCharacters = [];
  return (
    <StyleHomePage>
      <Header />
      <SearchForm characters={characters} />
      <HiddenCharacters characters={hiddenCharacters} />
      <Route path="/characters" render={() => <CharacterList characters={characters} />}/>
    </StyleHomePage>
  );
}
