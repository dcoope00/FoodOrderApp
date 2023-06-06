import styles from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from "../../store/cart-context"
import { useContext } from "react"
import CartItem from "./CartItem"

//This component uses the Modal component to show the current items in the cart
const Cart = props =>{

    const cartCtx = useContext(CartContext)
    const hasItems = cartCtx.items.length > 0

   

      const cartItemAddHandler = item =>{
        cartCtx.addItem({...item, amount:1})

      }
      const cartItemRemoveHandler = id => {
        
        cartCtx.removeItem(id)

      }


    const cartItems = (
        <ul className= {styles["cart-items"]}>{cartCtx.items.map((item) => (
            <li>{<CartItem  
            key = {item.id} 
            name = {item.name} 
            price = {item.price} 
            amount = {item.amount} 
            onRemove = {cartItemRemoveHandler.bind(null,item.id)}       /* we use bind to make sure the correct args are passed each time the function is called*/
            onAdd = {cartItemAddHandler.bind(null,item)}/> }</li>  ))}</ul>
    )

    return (
        <Modal hideCart = {props.hideCartHandler}>

            {cartItems}
            <div className = {styles.total}>
                <span>Total Amount</span>
                <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
            </div>
            <div className = {styles.actions}>
            <button className = {styles["button--alt"]} onClick = {props.hideCartHandler}>Close</button>
            {hasItems && <button className = {styles.button}>Order</button>}
          
            </div>


            </Modal>



    )
}

export default Cart