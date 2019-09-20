import React, { useState, useEffect } from "react";
import axios from "axios";
import { CharacterDetails } from "./CharacterList";

export default function SearchForm({characters}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  

  function onSubmit(e) {
    e.preventDefault();

    const results = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results)
    
    
    
  }
  

  

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
      
      <RenderSearchComponent searchResults={searchResults} />
    </section>
  )
  
}


function RenderSearchComponent ({searchResults}) {
  const [results, setResults] = useState({})
  
  // let results = {}
  useEffect(() => {
    if (searchResults.length !== 0) {
    const id = searchResults[0].id;
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response =>{
      // console.log(response.data)
      setResults(response.data)
      // debugger
      // console.log(results)
    })
    .catch(err => console.log(err))}
  }, [searchResults, results])

 
  if(Object.keys(results).length === 0) return <h4>Waiting on you</h4>

  return (
    <div>
        
      <CharacterDetails character={results} />
        
    </div>
  )
  
  
}