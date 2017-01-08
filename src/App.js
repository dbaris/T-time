var React = require('react');
var MyLoc = require('./myLoc.js');
var Main = require('./Main.js');

// Color Scheme Variables
var maroon = '#7A2323';
var orange = '#A25516';
var purple = '#691042';

// CSS Variables
var backgroundStyle = {
  background: maroon,
  height: '100%',
  width: '100%'
};

var divOuterStyle = {
  background: maroon,
  height: '100%',
  width: '100%',
  //padding: '10%',
  fontFamily: 'Baloo Paaji',
};

// var divInnerStyle = {
//   padding: '5%'
// }

var btnStyle = {
  background: orange,
  border: '3px solid green',
  color: purple,
  borderRadius: '5px',
  padding: '20%',
  margin: '50%',
  fontFamily: 'Baloo Paaji',
  fontSize: '20px'
};



var App = React.createClass({
  getInitialState: function() {
    return {main: true, 
            text: <Main showLoc={this.showLocation} showAll={this.showAll}/>};
  },
  showLocation: function() {
     
    this.setState({main: false, 
      text: 
      <div>
    
      <MyLoc onClick={this.hideLocation}/>
      </div>,

    });
  },
  hideLocation: function() {
    this.setState({main: true, text: <Main showLoc={this.showLocation} showAll={this.showAll}/>})
  },
  showAll: function() {
    this.setState({main: false,
      text: 
      <div>
      <button style={btnStyle} onClick={this.hideAll}>Back</button>
      <h1>All stations listed here: (jklolz)</h1>
      </div>
    })
  },
  hideAll: function() {
    this.setState({main: true, text: <Main showLoc={this.showLocation} showAll={this.showAll}/>})
  },
  render: function() {
    return (
      <div style={backgroundStyle}>
      <link href="https://fonts.googleapis.com/css?family=Baloo+Paaji" rel="stylesheet"/>
      <div style={divOuterStyle}>
      <div>{this.state.text}</div>
      </div>
      </div>
      );
  }
});

export default App;
