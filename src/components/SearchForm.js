import React, { useState } from "react";
import axios from "axios";
import { CharacterDetails } from "./CharacterList";

export default function SearchForm({characters}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});

  function onSubmit(e) {
    e.preventDefault();
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
    );
    // console.log(results)
    // setSearchResults(results);
    const idSearch = results[0].id;

    
      
  
    axios.get(`https://rickandmortyapi.com/api/character/${idSearch}`)
    .then(response =>{
      console.log(response.data)
      setSearchResults(response.data)
      debugger
      console.log(searchResults)
    })
    .catch(err => console.log(err))
   

    if(!searchResults) return <h2>Loading...</h2>

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
        <button onClick={onSubmit} >Submit</button>
      </form>
    </section>
  )
  
}


