var React = require('react');
var MyLoc = require('./myLoc.js');
var Main = require('./Main.js');

// COLOR SCHEME
// purple - 67003A
// orange - 803A00
//        - light shade - C57633

var divOuterStyle = {
  background: '#7A2323',
  //border: '1px solid blue',
  height: '100%',
  padding: '10%',
  fontFamily: 'Baloo Paaji'
};

var btnStyle = {
  background: '#A25516',
  border: 'none',
  color: '#691042',
  borderRadius: '5px',
  padding: '2%',
  margin: '5%',
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
    
      <MyLoc btnStyle={btnStyle} onClick={this.hideLocation}/>
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
      <div>
      <link href="https://fonts.googleapis.com/css?family=Baloo+Paaji" rel="stylesheet"/>
      <div style={divOuterStyle}>
      <div>{this.state.text}</div>

      </div>
      </div>
      );
  }
});

export default App;
