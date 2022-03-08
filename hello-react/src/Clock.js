import { Component } from "react";

class Clock extends Component {
  constructor(props) {  
    super();
    // console.log(props); // { format: 'HH:mm:ss' }
    this.state = {
      now: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date(), // on ne passe que ce qui change (pas un setter)
      });
    }, 1000);
  }
  render() {
    // console.log(this.props); // { format: 'HH:mm:ss' }
    const { now } = this.state;
    return (
      <div className="Clock"> {/* React.createElement('div', { className: 'Clock' }, now.toLocaleTimeString()) */}
        {now.toLocaleTimeString()}
      </div>
    ); 
  }
}

export default Clock;