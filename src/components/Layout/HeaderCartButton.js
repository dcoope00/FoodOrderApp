import React from 'react'
import styles from "./HeaderCartButton.module.css"
import Icon from "../Cart/CartIcon"
import { useContext } from 'react'
import CartContext from "../../store/cart-context"
// A custom button component to show the cart
const HeaderCartButton = (props) =>{
   const cartCtx =  useContext(CartContext)
    const numItemsInCart = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

        return(
            <button className = {styles.button} onClick = {props.openCart}  >
                <span className = {styles.icon}><Icon/></span>
                <span>Your Cart</span>
                <span className = {styles.badge}>{numItemsInCart}</span>


            </button>


        )

}

export default HeaderCartButton