import styles from "./Cart.module.css"
import Modal from "../../UI/Modal"

//This component uses the Modal component to show the current items in the cart
const Cart = props =>{
    const cartItems = (
        <ul className= {styles["cart-items"]}>{[{id: "c1", name: "Chocolate Cupcake", amount: 2, price: 12.99}].map((item) => (
            <li>{item.name}</li>))}</ul>
    )

    return (
        <Modal>

            {cartItems}
            <div className = {styles.total}>
                <span>Total Amount</span>
                <span>34.23</span>
            </div>
            <div className = {styles.actions}>
            <button className = {styles["button--alt"]} onClick = {props.hideCartHandler}>Close</button>
            <button className = {styles.button}>Order</button>
            </div>


            </Modal>



    )
}

export default Cart