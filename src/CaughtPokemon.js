import { useState } from 'react'

const pokemonNames = [
  "Dragonair", 
  "Dragonite", 
  "Steelix", 
  "Solrock", 
  "Regirock", 
  "Regice", 
  "Registeel",
]


const CaughtPokemon = (props) => {
  const [ caught, setCaught ] = useState([])

  // PSEUDOCODE SOLUTION
  // catchPokemon adds a random pokemon to the state
  const catchPokemon = () => {
    // pick a random number between 0 and the number of pokemon names we have
    let randomPosition = Math.floor(Math.random() * pokemonNames.length)
    // get the pokemon name at that position in the pokemonNames array
    const randomPokemon = pokemonNames[randomPosition]
    // add that pokemon name to the caught array in the state
    const newCaught = caught.concat(randomPokemon)
    setCaught(newCaught)
  }

  return (
    <p>
      <span>Caught {caught.length} Pokémon on {props.date}</span>
      <ul>
        { caught.map(name => (
          <li>{name}</li>
        ))}
      </ul>
      <button onClick={catchPokemon}>Catch a Pokemon</button>
    </p>
  )
}



export default CaughtPokemon
