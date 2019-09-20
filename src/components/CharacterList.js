import React from "react";



export default function CharacterList({characters}) {
  // TODO: Add useState to track data from useEffect
  if(!characters)return <h2>Loading...</h2>
  return (
    <div>
      
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