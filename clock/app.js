class App extends React.Component {
  state = {
    active: true,
  };

  handleClick = () => {
    this.setState((state) => ({
      active: !this.state.active,
    }));
  };

  render() {
    return (
      <div>
        <SwitchButton active={this.state.active} click={this.handleClick} />
        {this.state.active && <Clock />}
      </div>
    );
  }
}

const SwitchButton = (props) => (
  <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
);

class Clock extends React.Component {
  state = {
    time: this.getTime(),
  };

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      second: currentTime.getSeconds(),
    };
  }

  setTime() {
    const time = this.getTime();
    this.setState({ time });
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime.bind(this), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, second } = this.state.time;
    return (
      <div>
        {hours} : {minutes > 9 ? minutes : `0${minutes}`} :{" "}
        {second > 9 ? second : `0${second}`}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
