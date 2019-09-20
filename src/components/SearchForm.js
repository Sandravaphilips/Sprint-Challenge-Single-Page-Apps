import React, { useState, useEffect } from "react";
import axios from "axios";
import { CharacterDetails } from "./CharacterList";

export default function SearchForm({characters}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function OnSubmit() {
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
    );
    console.log(results)
    // setSearchResults(results);
    const id = results.id;

    useEffect(() => {
      
  
      axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response =>{
        setSearchResults(response.data)
      })
      .catch(err => console.log(err))
    }, [id]);

    if(!searchResults) return 'Loading...'

    return (
      <CharacterDetails character={searchResults} />
    )
  }
  

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  
  return (
    <section className="search-form">
     <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleChange}
        /> 
        <input name="submit" type="submit" onSubmit={OnSubmit} ></input>
      </form>

      
    </section>
  );
}


