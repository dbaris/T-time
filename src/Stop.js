var React = require ('react');

var btnStyle = {
  background: '#A25516',
  border: 'none',
  color: '#691042',
  borderRadius: '5px',
  padding: '5%',
  margin: '3%',
  fontFamily: 'Baloo Paaji',
  fontSize: '20px',
  width: '60%'
};

var Stop = React.createClass({
	render: function() {
		console.log(this.props.name);
		return (<button style={btnStyle}>{this.props.name}</button>);
	}
});

module.exports = Stop;