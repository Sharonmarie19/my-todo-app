import React from "react";

class Clock extends React.Component {
  state = {
    now: new Date(),
  };
  tick = () => {
    this.setState({ now: new Date() });
  };
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
    this.setState((state) => {
      return { day: state.now.getDay() };
    });
  }
  componentWillUnmount(){
clearInterval(this.timerId)
  }
  render() {
    let greeting = "";
    if (this.state.day == 2) {
      greeting = "Happy Tuesday!";
    }
    if (this.state.day === 5) {
      greeting = "TGIF!!!";
    }else if (this.state.day === 1){
        greeting = "What day is it?";
    }
    return (
      <div>
        {greeting}
        {this.state.now.toLocaleTimeString()}
      </div>
    );
  }
}
export default Clock;
