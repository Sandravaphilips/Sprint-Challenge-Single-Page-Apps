import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

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

  if(!characters)return <h2>Loading...</h2>
  return (
    <div>
      <SearchForm characters={characters} />
      <section className="character-list">
        {characters.map(character => 
        <CharacterDetails key={character.id} character={character} />
        )}
      
      </section>
    </div>
    
  );
}


function CharacterDetails({ character }) {
  const { name, status, species, gender, episode } = character;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        Status: <em>{status}</em>
      </div>
      <div>
        Gender: <strong>{gender}</strong>
      </div>
      <div>
        Species: <strong>{species}</strong>
      </div>
      <div>
        Number of episodes: <strong>{episode.length}</strong>
      </div>
    </div>
  );
}

export {CharacterDetails};