import {legacy_createStore as createStore} from "redux"

export function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    payload: product
  }
}

export function removeFromCart(productId) {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId
  }
}

const cart = JSON.parse(localStorage.getItem("cart"))
const initialState = cart || []

function reducer(cart = initialState, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      return [...cart, action.payload]
    case "REMOVE_FROM_CART": {
      const updatedCart = cart.filter(product => (product.id).toString() !== (action.payload).toString())
      return updatedCart
    }
    default:
      return cart
  }
}

const store = createStore(reducer)
store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState()))
  console.log(store.getState())
})

export default store