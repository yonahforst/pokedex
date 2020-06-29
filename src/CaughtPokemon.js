import React, { useState } from "react";

function CaughtPokemon(props) {
  const [ caughtPokemon, setCaughtPokemon ] = useState([]);
  const [ pokemonNameInput, setPokemonNameInput ] = useState(''); 

  function catchPokemon() {
    if (pokemonNameInput) {
      setCaughtPokemon([
        ...caughtPokemon,
        pokemonNameInput,
      ]);
      setPokemonNameInput('');
    }
  }

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value)
  }

  return (
    <div>
      <input
       type='text' 
       value={pokemonNameInput}
       onChange={handleInputChange}
       />
      <button onClick={catchPokemon}>Catch!</button>
      <div>
        Caught  
        <ul>
          { caughtPokemon.map((name, index) => <li key={index}>{name}</li>) }
        </ul>
        Pokemon on {props.date}
      </div>
    </div>
  );
}

export default CaughtPokemon;
