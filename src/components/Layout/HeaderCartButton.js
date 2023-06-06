import React from 'react'
import styles from "./HeaderCartButton.module.css"
import Icon from "../Cart/CartIcon"
import { useContext, useEffect, useState } from 'react'
import CartContext from "../../store/cart-context"
// A custom button component to show the cart
const HeaderCartButton = (props) =>{

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

   const cartCtx =  useContext(CartContext)
   const {items} = cartCtx

    const numItemsInCart = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`
    useEffect(() =>{
        if(cartCtx.items.length === 0){
            return
        }
        setBtnIsHighlighted(true)
        const timer = setTimeout(() =>{
            setBtnIsHighlighted(false)
        }, 300)

        return () =>{
            clearTimeout(timer)
        }

    },[items]) 

        return(
            <button className = {btnClasses} onClick = {props.openCart}  >
                <span className = {styles.icon}><Icon/></span>
                <span>Your Cart</span>
                <span className = {styles.badge}>{numItemsInCart}</span>


            </button>


        )

}

export default HeaderCartButton