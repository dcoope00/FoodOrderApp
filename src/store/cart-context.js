import React from "react"

// Here context is used to avoid stringing together a chain of props for the multiple components that
// need access to the cart
const cartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) =>{},
    removeItem: (id) =>{}
})

export default cartContext 