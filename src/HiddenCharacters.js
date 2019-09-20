import React from 'react';
import CharacterList from './components/CharacterList';
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleLink = styled(Link)`
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`;



export default function HiddenCharacters({characters}) {
    return (
        <div>
            <h3>Characters:</h3>
            {characters.map(character => (
            <span>{character.name}</span>
            ))}
            <StyleLink to='/characters' component={CharacterList}>
                <div>View Characters</div>
            </StyleLink>
        </div>
    )
};
