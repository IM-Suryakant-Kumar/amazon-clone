import { legacy_createStore as createStore } from "redux"

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

export function setUser(user) {
	return {
		type: "SET_USER",
		payload: user
	}
}

export function getCartTotalPrice(cart) {
	return cart.reduce((total, product) => total + product.price, 0)
}

export function emptyCart() {
	return {
		type: "EMPTY_CART"
	}
}

const initialState = {
	cart: [],
	user: null
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_TO_CART":
			return { ...state, cart: [...state.cart, action.payload] }
		case "REMOVE_FROM_CART": {
			const updatedCart = state.cart.filter(
				(product) => product.id !== action.payload
			)
			return { ...state, cart: updatedCart }
		}
		case "SET_USER":
			return { ...state, user: action.payload }
		case "EMPTY_CART":
			return { ...state, cart: [] }
		default:
			return state
	}
}

const store = createStore(reducer)
store.subscribe(() => {
	console.log(store.getState())
})

export default store
