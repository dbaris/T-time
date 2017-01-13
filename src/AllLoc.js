var React = require('react');
var Button = require('./Button.js');

// Color Scheme Variables
var maroon = '#7A2323';
var orange = '#A25516';
var purple = '#691042';
var yellow = '#C8742E';

// CSS Vars
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

var divTest = {
 // border: '1px solid green',
  margin: '0 auto',
  width: '100%',
  height: '100%',
};

var divHeader = {
	display: 'inline-block',
	paddingLeft: '5%',
  	//paddingRight: '10%',
 	//marginLeft: '10%',
  	marginRight: '10%'
  	//color: yellow
};

var backBtn = {
	color: yellow,
	margin: '0 auto',
	background: maroon,
	fontFamily: 'Baloo Paaji',
	border: 'none',
	fontSize: '20px'
};

var backDiv = {
	margin: '0 auto',
	width: '50%',
	textAlign: 'center'
};

var divTitle = {
	fontSize: '30px',
	paddingLeft: '15%',
	display: 'inline-block',
	color: yellow
}

var bodyStyle = {
  //margin: '0 auto',
  marginLeft: '5%',
  marginRight: '8%',
  //width: '40%',
  //border: '1px solid black',
  background: maroon,
  minHeight: '650px',
  //display: 'inline-block', 
  verticalAlign: 'top'
};

// Back Button
//  --> Props
//    * btnStyle - styling for button
//    * onClick - click action
function BackBtn (props) {
	return <button style={btnStyle} onClick={props.clickFunc}>Back</button>;
}

var AllLoc = React.createClass({
	getInitialState: function() {
		return {
			body: <div>
				  <Button name="Buses" onClick={this.showBuses} />
				  <Button name="Trains" onClick={this.showTrains} />
				  <Button name="Commuter Rail" onClick={null} />
				  </div>
		};
	},
	showTrains: function() {
		this.setState({
			body: <div>
				  <div style={backDiv}><button style={backBtn} onClick={this.showMain}>Back To Transit</button></div>
				  <Button line='blue' name="Blue Line" onClick={null} />
				  <Button line='red' name="Red Line" onClick={null} />
				  <Button line='green' name="Green Line" onClick={null} />
				  <Button line='orange' name="Orange Line" onClick={null} />
				  <Button line='silver' name="Silver Line" onClick={null} />
				  </div>
		});
	},
	showBuses: function() {
		this.setState({
			body: <div>
				  <div style={backDiv}><button style={backBtn} onClick={this.showMain}>Back To Transit</button></div>
				  <p> too many buses ! </p>
				  </div>
		});
	},
	showMain: function() {
		this.setState({
			body: <div>
				  <Button name="Buses" onClick={null} />
				  <Button name="Trains" onClick={this.showTrains} />
				  <Button name="Commuter Rail" onClick={null} />
				  </div>
		});
	},
	render: function() {
		return (
			<div style={divTest}>
            <div style={divHeader}> 
  			<BackBtn btnStyle={this.props.btnStyle} clickFunc={this.props.onClick} /> 
  			</div>
  			<div style={divTitle}>Search All Stations</div>
  			<div style={bodyStyle}> {this.state.body}</div>
  			</div>

			);
	}
});

module.exports = AllLoc