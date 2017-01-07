var React = require('react');
import { GoogleMap, withGoogleMaps, Marker } from 'react-google-maps';


const GettingStartedGoogleMap = withGoogleMaps(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    // NOTE - change to props
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    
  </GoogleMap>
));


var Maps = React.createClass({
	render: function() {
		return (<div>
			<GettingStartedGoogleMap
    		containerElement={
      			<div style={{ height: `100%` }} />
    		}
   			mapElement={
      			<div style={{ height: `100%` }} />
    		}
		    //onMapLoad={_.noop}
		    //onMapClick={_.noop}
		    //markers={markers}
		    //onMarkerRightClick={_.noop}
		    />
		    </div>);
	}
});

module.exports = Maps;