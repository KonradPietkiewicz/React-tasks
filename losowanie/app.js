class App extends React.Component {
  state = {
    options: ["Adam", "Kasia", "Basia"],
    option: null,
    value: "",
  };

  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index],
    });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddOption = () => {
    if (this.state.value === "") return alert("Wpisz imię");
    const options = [...this.state.options];
    options.push(this.state.value);
    this.setState({
      options,
      value: "",
    });
    alert(`Imię dodane. Aktualne imiona: ${options}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowOption}>Wylosuj imię</button>
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddOption}>Dodaj imię</button>
        {this.state.option ? <h1>{this.state.option}</h1> : ""}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
