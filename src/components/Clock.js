import React from "react";

class Clock extends React.Component{
    state= {
        now: new Date(),
    };
    tick = () => {
        this.setState({ now: new Date() });
    };
    componentDidMount(){
        setInterval(()=> this.tick(), 1000);
    }
    render(){
        return <div>{this.state.now.toLocaleTimeString()}</div>;
    }
}







export default Clock;