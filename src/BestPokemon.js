
const BestPokemon = (props) => {
  return (
    <div>
      <p>My favorite Pokémon is {props.name}. Their color is {props.color}</p>
      <ul>
        {props.abilities.map((ability, i) => (
          <li key={i}>{ability}</li>
        ))}
      </ul>
    </div>
  )
}

export default BestPokemon