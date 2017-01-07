var React = require('react');
var Stop = require('./Stop.js');
// var Maps = require('./GoogleMaps.js');


var maroon = '#7A2323';
var orange = '#A25516';
var purple = '#691042';
var yellow = '#C8742E';

var btnStyle = {
  background: yellow,
  border: '5px solid ' + orange,
  color: purple,
  borderRadius: '5px',
  paddingLeft: '20%',
  paddingRight: '20%',
  margin: '50%',
  fontFamily: 'Baloo Paaji',
  fontSize: '20px'
};

var loadingStyle = {
	color: yellow,
	display: 'inline-block', 
  //border: '1px solid green',
  margin: '0 auto'
};

var bodyStyle = {
  //margin: '0 auto',
  marginLeft: '5%',
  marginRight: '5%',
  width: '40%',
  //border: '1px solid black',
  background: maroon,
  minHeight: '550px',
  display: 'inline-block', 
  verticalAlign: 'top'
};

var divTest = {
 // border: '1px solid green',
  margin: '0 auto',
  width: '100%',
  height: '100%',
};

var divStyle = {
	textAlign: 'center'
};

var divHeader = {
	display: 'inline-block',
	paddingLeft: '20px',
  paddingRight: '20px',
  marginLeft: '30px',
  marginRight: '30px'
};

var mapStyle = {
  display: 'inline-block',
  width: '40%',
  verticalAlign: 'top',
  color: yellow
};

function BackBtn (props) {
	return <button style={btnStyle} onClick={props.clickFunc}>Back</button>;
}

function Loading (props) {
	return (<h1>Loading location...</h1>)
}

var MyLoc = React.createClass({
  getInitialState: function() {
  	return {lat: null, 
  			long: null,
  			text: <div style={divTest}><div style={divHeader}> 
  				  <BackBtn btnStyle={this.props.btnStyle} clickFunc={this.props.onClick} /> 
  				  </div>
  				  <div style={divHeader}>
  				  <Loading />
  				  </div></div>,
  			body: <div></div>};
  },
  componentDidMount: function() {
  	//console.log('here');
  	navigator.geolocation.getCurrentPosition(this.success);
  },
  success: function(position) {
  	// NOTE - hardcoding in vars (from far away); replace w THIS LINE
  	//this.setState({lat: position.coords.latitude, long: position.coords.longitude});
  	this.setState({lat: 42.3964, long: -71.1222})

  	//this.setState({text: (<h1>latitude: {this.state.lat} longitude: {this.state.long}</h1>)});
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
      <div>
  		<div style={bodyStyle}>{this.state.body}</div>
      <div style={mapStyle}> Map goes here! </div>
      </div>
  		</div>); 

  }
});

module.exports = MyLoc;

// google ~maps~ 
//		http://revelry.co/google-maps-react/