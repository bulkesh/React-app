import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Content extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
        counter: 0
      }
  
      this.clickHandler = this.clickHandler.bind(this);
      this.getElement = this.getElement.bind(this);
    }
    clickHandler() {
  
      let cnt = this.state.counter;
      ++cnt;
      let item = "Click " + cnt;
      let myArray = this.state.data;
      myArray.push(item);
      this.setState({
        data: myArray,
        counter: cnt
      });
      console.log('click --', this.state);
    }
  
    getElement() {
      let myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'blue';
    }
    render() {
      return (
        <div>
          <h1>{this.props.content}</h1>
          <h4>Array: {this.props.propArray.join(', ')}</h4>
          <h4>First Name: {this.props.propObject.fName}</h4>
          <h4>last Name: {this.props.propObject.lName}</h4>
          <hr />
          <button onClick={this.clickHandler}>Click Me!!</button>
          <h4>State Data : {this.state.data.join(', ')}</h4>
  
          <hr />
          <button onClick={this.getElement}>Get Element</button>
          <div id='myDiv'>This is my Div.</div>
        </div>
      )
    }
  }
  
  Content.propTypes = {
    propArray: PropTypes.array.isRequired,
    propObject: PropTypes.object.isRequired,
    propString: PropTypes.string,
    propBoolean: PropTypes.bool,
    propNumber: PropTypes.number,
    propFunc: PropTypes.func
  }
  
  Content.defaultProps = {
    propArray: [1, 2, 3, 4, 5],
    propObject: {
      fName: 'Bulkesh',
      lName: 'Kumawat',
      age: 37
    },
    propString: 'Good morning !!',
    propBoolean: true,
    propNumber: 37,
    propFunc: (e) => e
  }

  export default Content;