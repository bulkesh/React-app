import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
      super(props)
      this.state = {
        counter: 0
      };
      this.updateCounter = this.updateCounter.bind(this);
    }
    updateCounter() {
      let ctr = this.state.counter;
      ++ctr;
      this.setState({
        counter: ctr
      })
    }
    componentDidMount() {
      console.log("componentDidMount");
    }
    componentDidCatch() {
      console.log("componentDidCatch");
    }
    componentDidUpdate() {
      console.log("componentDidUpdate");
    }
    shouldComponentUpdate() {
      console.log("shouldComponentUpdate");
      return true;
    }
    componentWillUnmount() {
      console.log("componentWillUnmount");
    }
    render() {
      return (
        <div>
          <h2> Life cycle hooks of compoent.</h2>
          <hr />
          <button onClick={this.updateCounter}>Click Me!!</button>
          <h4>State Data : {this.state.counter}</h4>
        </div>
      )
    }
  }

  export default LifeCycle;
  