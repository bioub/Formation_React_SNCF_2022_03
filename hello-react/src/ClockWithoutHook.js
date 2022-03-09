import { Component } from "react";

class ClockWithoutHook extends Component {
  constructor(props) {  
    super();
    // console.log(props); // { format: 'HH:mm:ss' }
    this.state = {
      now: new Date(),
      format: 'HH:mm:ss',
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
      <div className="ClockWithoutHook"> {/* React.createElement('div', { className: 'Clock' }, now.toLocaleTimeString()) */}
        {now.toLocaleTimeString()}
      </div>
    ); 
  }
}

export default ClockWithoutHook;