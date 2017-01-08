var React = require('react');

// Color Scheme
var maroon = '#7A2323';
var orange = '#A25516';
var purple = '#691042';
var yellow = '#C8742E';

// CSS variables
var divStyle = {
  textAlign: 'center',
  fontSize: '25px',
  padding: '5px',
  border: '5px solid ' + orange,
  background: yellow,
  margin: '0 auto',
  width: '50%',
  color: purple
};

var hStyle = {
  padding: 0,
  margin: '0 auto'
};

var imgStyle = {
  heigth: '50%',
  width: '50%',
  border: '5px solid ' + maroon 
};

var pStyle = {
  fontSize: '15px'
};

var btnStyle = {
  background: orange,
  border: 'none',
  color: purple,
  borderRadius: '5px',
  padding: '5%',
  margin: '5%',
  fontFamily: 'Baloo Paaji',
  fontSize: '20px'
};

// Main Page of App (By Location & All Station buttons)
var Main = React.createClass({
	render: function() {
		return (
			<div style={divStyle}>
			<h1 style={hStyle}>T-Time</h1>
       		<p style={pStyle}>Your friend for finding the closest MBTA stations and upcoming ride times.</p>
	       <img style={imgStyle} src='./Tmap.jpeg' alt="bostonT"/>
	       <div>
         <button onClick={this.props.showLoc} style={btnStyle}>By My Location</button>
	       <button onClick={this.props.showAll} style={btnStyle}>All Stations</button>
	       </div>
	       </div>);
	}
});

module.exports = Main;