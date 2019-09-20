import React from 'react';
import CharacterList from './components/CharacterList';
import { Link } from "react-router-dom";


export default  function HiddenCharacters({characters}) {
    return (
        <div className="saved-list">
            <h3>Characters:</h3>
            {characters.map(character => (
            <span>{character.name}</span>
            ))}
            <Link to='/characters' component={CharacterList}>
                <div>View Characters</div>
            </Link>
        </div>
    )
};
