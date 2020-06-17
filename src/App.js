import React from 'react';

const App = () => {

  const weatherData = {
    temperature: 5,
    location: "London",
  };

  return (
    <div>
      <Logo data={weatherData} foo='bar'/>
      <BestPokemon name='Squirle'/>
    </div>
  );
}

const calculateWeather = (weatherData) => {
  return `The weather in ${weatherData.location} is ${weatherData.temperature}`
}

const Logo = (props) => {

  return (
    <header>
      <h1>{calculateWeather(props.data)}</h1>
      <img alt='pokemon' src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'/>
    </header>
  )
}

const BestPokemon = (props) => <p>My favourite Pokemon is {props.name}</p>

export default App;
