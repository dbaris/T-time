// Page Shows Closest Stations based on location

var React = require('react');
var Stop = require('./Stop.js');
// var Maps = require('./GoogleMaps.js');

// Color Scheme Variables
var maroon = '#7A2323';
var orange = '#A25516';
var purple = '#691042';
var yellow = '#C8742E';

// CSS Variables
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

// Back Button
//  --> Props
//    * btnStyle - styling for button
//    * onClick - click action
function BackBtn (props) {
	return <button style={btnStyle} onClick={props.clickFunc}>Back</button>;
}

function Loading (props) {
	return (<h1>Loading location...</h1>)
}

var MyLoc = React.createClass({
  getInitialState: function() {
  	return {
        lat: null, 
  			long: null,
  			text: <div style={divTest}>
            <div style={divHeader}> 
  				  <BackBtn btnStyle={this.props.btnStyle} clickFunc={this.props.onClick} /> 
  				  </div>
  				  <div style={divHeader}>
  				  <Loading />
  				  </div></div>,
  			body: <div></div>};
  },

  // Runs after initial render; begins API calls
  componentDidMount: function() {
  	navigator.geolocation.getCurrentPosition(this.success, function() {
      console.log('no geoloc! should crash ~gracefully~');
    });
  },

  // Runs upon presence of geolocation, calls MBTA API
  success: function(position) {
  	// NOTE - hardcoding in vars (from far away); replace w THIS LINE
  	//this.setState({lat: position.coords.latitude, long: position.coords.longitude});
  	this.setState({lat: 42.3964, long: -71.1222})

    // NOTE - development API key hardcoded in (for now)
    var apikey = "wX9NwuHnZU2ToO7GmGR9uw";
  	var url = "http://realtime.mbta.com/developer/api/v2/stopsbylocation?api_key=" + apikey + "&lat="+ this.state.lat +"&lon=" + this.state.long + "&format=json";

    // GET request - if user has already changed pages, will not call fetch
  	(this.state.lat != null && this.state.lon != null) ? fetch(url).then(this.responseHandler) : url = '';
  	return null;
  },

  // Success function for MBTA api
  responseHandler: function(response) {
  	// use arrow to avoid rebinding 'this' in callback function
  	response.json().then((data) => {
      // create Stop components for first 8 stops
      var i = 0;
      var num_stops = 8;

      var stops = data['stop'].map(function(stop) {
          i++;
          var name = stop['stop_name'];
          var dist = stop['distance'];

     			return (i <= num_stops) ? <Stop name={name} dist={dist} key={i}/> : <p key={i}></p>;
   		 });

      // Wrap stop elements in div (thanks React!)
  		var info = <div style={divStyle}> {stops} </div>;
  		
      // Update Components
  		this.setState({
        text: <div> 
              <div style={divHeader}>
  						<BackBtn btnStyle={this.props.btnStyle} clickFunc={this.props.onClick} /> 
  						</div>
              <div style={divHeader}>
  						<h1>Closest Stops</h1>
  						</div>
              </div>,
        body: info 
      });
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

// google ~maps~, perhaps ?
//		http://revelry.co/google-maps-react/
//    http://stackoverflow.com/questions/29532356/google-maps-in-react 