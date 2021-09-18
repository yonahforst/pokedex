import Logo from './Logo'
import BestPokemon from './BestPokemon'
import CaughtPokemon from './CaughtPokemon';

const App = () => (
  <div>
    <Logo appName="Pokedex"/>
    <BestPokemon name='Squirtl' color='yellow' abilities={['Anticipation', 'Adaptability', 'Run-Away', 'Run-Away']}/>
    <CaughtPokemon date={new Date().toLocaleDateString()}/>
  </div>
)

export default App;
