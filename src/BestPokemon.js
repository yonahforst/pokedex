import React, { useState } from "react";

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favourite Pokemon is {props.pokemon.name}</p>
      <ul>
        {props.pokemon.abilities.map((abilityObj, index) => {
          return <li key={index}>{abilityObj.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

const BestPokemonFetcher = (props) => {
  const [ bestPokemon, setBestPokemon ] = useState(null);

  React.useEffect(() => {
    setBestPokemon(null)
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
    .then(response => response.json())
    .then(data => setBestPokemon(data))
  }, [ props.pokemonId ])

  return bestPokemon ? <BestPokemon pokemon={bestPokemon} /> : "Loading..."
};

function BestPokemonSelector() {
  const [ pokemonId, setPokemonId ] = useState(null);

  function handleBulbasaurClick() {
    setPokemonId('1');
  }
  function handleCharmanderClick() {
    setPokemonId('4');
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : null}
    </div>
  );
}

export default BestPokemonSelector;
