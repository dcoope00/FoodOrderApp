import CartContext from "./cart-context"
import { useReducer } from "react"




const defaultCartState = {
    items: [],
    totalAmount: 0
}
//a reducer function takes 2 values, an action that is used later, and a state that is the last 
//state snapshot of the state managed by the reducer
//it returns a new state snapshot
const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;

        if (existingCartItem) {

            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        else {
            updatedItems = state.items.concat(action.item)
        }




        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)

        const existingCartItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price

        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter((item) => { return item.id != action.id })

        }
        else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
   

    return (
        defaultCartState
    )

}
const CartProvider = (props) => {
    //like useState, useReducer returns an array with 2 elements. 1 is a state snapshot, the other is a function that allows dispatch an action 
    //it accepts a reducer function and initial state as args
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: "ADD",
            item: item
        })
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: "REMOVE",
            id: id
        })

    }

   



    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }


    return (

        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )

}

export default CartProvider