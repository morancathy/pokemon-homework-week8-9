const React = require('react');

//CSS Styling#######################
const divStyle = {
color: '#ffffff',
backgroundColor: '#FF69B4',
};

const liStyle = {
  fontSize: '18px',
  color: 'black',
  paddingBottom: '25px'
};
//###############################

class Index extends React.Component {
  render(){
    const pokemons = this.props.pokemon;   
    return (
      <div style={divStyle}>
        <h1>See All The Pokemon!</h1>
        <nav>
          <a href="/pokemon/new">Create a New Pokemon</a>
        </nav>
        <ul>
          {pokemons.map((pokemon) =>{
              return(
                <li style={liStyle} key={pokemon._id}>
                  Hi, I am <a href={`/pokemon/${pokemon._id}`}>{(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))}!</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
module.exports = Index;
