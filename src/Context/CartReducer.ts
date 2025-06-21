import type { CartProductIterface } from "../interface"

export const initialState: CartState = {
    cartItems: []
}
export interface CartState {
    cartItems: CartProductIterface[]
}


export interface CartAction {
    type: "ADD_TO_CART" | "REMOVE_FROM_CART";
    payload: CartProductIterface
}


export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const { id } = action.payload

            //validar si el item ya existe en el carrito. true o false

            const existingItem = state.cartItems.find((item) => item.id === id)

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        }

        case "REMOVE_FROM_CART": {
            const { id: removeItemID } = action.payload;

            // validar si el item ya existe en el carrito

            const itemToRemove = state.cartItems.find((item) => item.id === removeItemID)

            if (itemToRemove) {

                if (itemToRemove.quantity === 1) {
                    return {
                        ...state,
                        cartItems: state.cartItems.filter((item) => item.id !== removeItemID)
                    }
                } else {
                    return {
                        ...state,
                        cartItems: state.cartItems.map((item) => item.id === removeItemID ? { ...itemToRemove, quantity: itemToRemove.quantity - 1 } : item)
                    }

                }

            }

            return state;
        }
        default:

            return state
    }

}

