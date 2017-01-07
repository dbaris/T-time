var React = require('react');
var Stop = require('./Stop.js');
//var Ajax = require('react-ajax');

var loadingStyle = {
	color: '#A25516',
	display: 'inline-block'
};

var divStyle = {
	textAlign: 'center'
}

var divHeader = {
	display: 'inline-block',
	padding: '20px'
}

function BackBtn (props) {
	return <button style={props.btnStyle} onClick={props.clickFunc}>Back</button>;
}

function Loading (props) {
	return (<h1>Loading location...</h1>)
}

var MyLoc = React.createClass({
  getInitialState: function() {
  	return {lat: null, 
  			long: null,
  			text: <div><div style={divHeader}> 
  				  <BackBtn btnStyle={this.props.btnStyle} clickFunc={this.props.onClick} /> 
  				  </div>
  				  <div style={divHeader}>
  				  <Loading />
  				  </div></div>,
  			body: null};
  },
  componentDidMount: function() {
  	//console.log('here');
  	navigator.geolocation.getCurrentPosition(this.success);
  },
  success: function(position) {
  	// NOTE - hardcoding in vars (from far away); replace w THIS LINE
  	//this.setState({lat: position.coords.latitude, long: position.coords.longitude});
  	this.setState({lat: 42.3964, long: -71.1222})

  	this.setState({text: (<h1>latitude: {this.state.lat} longitude: {this.state.long}</h1>)});
  	var url = "http://realtime.mbta.com/developer/api/v2/stopsbylocation?api_key=wX9NwuHnZU2ToO7GmGR9uw&lat="+ this.state.lat +"&lon=" + this.state.long + "&format=json";
  	console.log(url);
  	fetch(url).then(this.responseHandler);
  	return null;
  },
  responseHandler: function(response) {
  	// use arrow to avoid rebinding 'this' in callback function
  	response.json().then((data) => {
  		//create Stop component for each stop
 		var stops = data['stop'].map(function(stop) {
 			var name = stop['stop_name'];
 			var key = stop['stop_id']
 			return <Stop name={name} key={key}/>
 		});

  		var info = <div style={divStyle}> {stops} </div>;
  		
  		this.setState({text: <div> <div style={divHeader}>
  							 <BackBtn btnStyle={this.props.btnStyle} clickFunc={this.props.onClick} /> 
  							 </div><div style={divHeader}>
  							 <h1>Closest Stops</h1>
  							 </div></div>});
  		this.setState({body: info});
  	});
  	
  },
  render: function() {
  	return (
  		<div>
  		<div style={loadingStyle}>{this.state.text}</div>
  		<div>{this.state.body}</div>
  		</div>); 

  }
});

module.exports = MyLoc;

// google ~maps~ 
//		http://revelry.co/google-maps-react/