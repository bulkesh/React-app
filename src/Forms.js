import React, {Component} from "react";
import './Forms.css';

class Forms extends Component {
    constructor(props){
        super(props);

        this.state={
            inputValue:'My Input value'
        };
    }

    onInputChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    render(){
        return(
            <div>
                <h2>React Form !!</h2>
                <InputField inputValue={this.state.inputValue} 
                changeEvent={(e)=>this.onInputChange(e)}/>
                <h4>{this.state.inputValue}</h4>
            </div>
        );
    }
}

class InputField extends Component {
    render() {
        return(
            <input type='text' value={this.props.inputValue} onChange={this.props.changeEvent}></input>
        )
    }
}

export default Forms;