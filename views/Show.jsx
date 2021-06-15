const React = require('react');

//CSS Styling#######################
const divStyle = {
color: '#ffffff',
backgroundColor: '#FF69B4',
textAlign: 'center',
};
const h1Style = {

};
const h2Style = {

};

const imgStyle = {
  marginBottom: '45px',
  border: 'solid blue',
};

const hrefStyle = {

};
//###############################


class Show extends React.Component {
  render(){
    const pokemon = this.props.pokemon;
    const jpgImage = pokemon.img + ".jpg"
    return (
      <div style={divStyle}>
        <h1 style={h1Style}>Gotta Catch 'Em All'!</h1>
        <h2 style={h2Style}>{(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1))}</h2>
        <img style={imgStyle} src={jpgImage} alt="Pokemon Picutre"/>
        <a style={hrefStyle} href={/pokemon/}>back</a>
      </div>
    )
  }
}
module.exports = Show;
