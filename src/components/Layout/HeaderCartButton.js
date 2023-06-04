import React from 'react'
import styles from "./HeaderCartButton.module.css"
import Icon from "../Cart/CartIcon"
// A custom button component to show the cart
const HeaderCartButton = (props) =>{

        return(
            <button className = {styles.button} onClick = {props.openCart}  >
                <span className = {styles.icon}><Icon/></span>
                <span>Your Cart</span>
                <span className = {styles.badge}>3</span>


            </button>


        )

}

export default HeaderCartButton