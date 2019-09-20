import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const {characters, setCharacters} = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response =>{
      const characterList = response.data.results
      setCharacters(characters.concat(characterList))
    })
      
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => 
        <h2></h2>)}
      
    </section>
  );
}
