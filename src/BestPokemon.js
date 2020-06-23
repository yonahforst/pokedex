import React from "react";

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
  const [ bestPokemon, setBestPokemon ] = React.useState(null);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(response => response.json())
    .then(data => setBestPokemon(data))
  }, [])

  return bestPokemon ? <BestPokemon pokemon={bestPokemon} /> : null
};

export default BestPokemonFetcher;