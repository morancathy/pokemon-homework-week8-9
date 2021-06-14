const React = require('react');

const myStyle = {
color: '#ffffff',
backgroundColor: '#FF69B4',
};

class Index extends React.Component {
  render(){
    //const
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
      </div>
    )
  }
}
module.exports = Index;
