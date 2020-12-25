class App extends React.Component {
  state = {
    availableProducts: 7,
    shopingCart: 0,
  };

  handleRemoveFromCart = () => {
    this.setState({
      shopingCart: this.state.shopingCart - 1,
    });
  };

  handleAddToCart = () => {
    this.setState({
      shopingCart: this.state.shopingCart + 1,
    });
  };

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shopingCart,
      shopingCart: 0,
    });
  };
  render() {
    const { shopingCart, availableProducts } = this.state;
    const style =
      this.state.shopingCart === 0
        ? {
            opacity: 0.3,
          }
        : {};
    return (
      <>
        <button
          disabled={shopingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span style={style}>{shopingCart} </span>
        <button
          disabled={shopingCart === availableProducts ? true : false}
          onClick={this.handleAddToCart}
        >
          +
        </button>
        {shopingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
