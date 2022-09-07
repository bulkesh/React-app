import React, {Component} from "react";

class LearnMore extends Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        return(<h2><a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a></h2>)
    }
}

export default LearnMore;