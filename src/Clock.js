import React, {Component} from "react";

class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date
        }
    }

    componentDidMount(){
        this.myTime = setInterval(
            ()=>{this.updateTime()}, 1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.myTime);
    }
    updateTime() {
        this.setState({
            time: new Date
        })
    }

    render(){
        return(<h4 style={{margin:0}}>{this.state.time.toLocaleTimeString()}</h4>)
    }
}

export default Clock;