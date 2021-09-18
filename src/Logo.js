
const Logo = (props) => {
  let name = 'yonah'

  return (
    <header>
      <h1>Welcome to the {props.appName} {name + ', again'}</h1>
      <img
      onClick={props.handleClick}
      alt='' 
      src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'>
      </img>
    </header>
  )
}

export default Logo