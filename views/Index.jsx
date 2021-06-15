const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#FF69B4',
};

const liStyle = {
  paddingBottom: '5px'
};

class Index extends React.Component {
  render(){
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((charactor, i) =>{
              return(
                <li style={liStyle}>
                  Hi, I am <a href={`/pokemon/${i}`}>{(pokemon[i].name.charAt(0).toUpperCase() + pokemon[i].name.slice(1))}!</a>
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
