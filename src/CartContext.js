import { createContext, Component } from "react";

const {Provider, Consumer} = createContext();

class CartContextProvider extends Component {
  state = {
    basket: JSON.parse(localStorage.getItem("basket")) || []
  }

  setBasket = (basket) => {
    this.setState(() => {
      localStorage.setItem("basket", JSON.stringify(basket))
      return (
        {
          basket
        }
      )
    })
  }

  render() {
    return (
      <Provider value={{ basket: this.state.basket, setBasket: this.setBasket}}>
        {this.props.children}
      </Provider>
    )
  }
}

export { CartContextProvider, Consumer as CartContextConsumer };