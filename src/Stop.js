var React = require ('react');

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
  fontSize: '15px',
  width: '100%'
};

var Stop = React.createClass({
	render: function() {
		//console.log(this.props.name);

    // Round distance to nearest hundredth
    var dist = Math.round(this.props.dist * 100) / 100;
		return (<button style={btnStyle}>
      <div>{this.props.name}</div>
      <div>{dist} miles away</div>
      </button>);
	}
});

module.exports = Stop;