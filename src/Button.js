var React = require('react');

// Color Scheme Variables
//var maroon = '#7A2323';
var orange = '#A25516';
var purple = '#691042';
var yellow = '#C8742E';

// CSS Variables
var btnStyle = {
  background: yellow,
  border: '5px solid ' + orange,
  color: purple,
  borderRadius: '5px',
  padding: '5%',
  margin: '3%',
  fontFamily: 'Baloo Paaji',
  fontSize: '20px',
  width: '100%'
};

var Button = React.createClass({
	render: function() {
		return (
			<button style={btnStyle} onClick={this.props.onClick}>
      		<div>{this.props.name}</div>
      		</button>);
	}
});

module.exports = Button;