import styles from "./Cart.module.css"
import Modal from "../UI/Modal"
import CartContext from "../../store/cart-context"
import { useContext, useState } from "react"
import CartItem from "./CartItem"
import Checkout from "./Checkout"

//This component uses the Modal component to show the current items in the cart
const Cart = props => {

  const [orderClicked, setOrderClicked] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

  const cartCtx = useContext(CartContext)
  const hasItems = cartCtx.items.length > 0

  const cartItemAddHandler = item => {
    cartCtx.addItem(item)

  }
  const cartItemRemoveHandler = id => {

    cartCtx.removeItem(id)

  }
  const orderHandler = () => {
    setOrderClicked(true)

  }

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch("https://foodorderapp-c087b-default-rtdb.firebaseio.com/orders.json", {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items

      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => {
        console.log(error.message)
        setIsSubmitting(false)
        return
      })
    setIsSubmitting(false)
    setDidSubmit(true)
    for(const item of cartCtx.items){
      cartCtx.removeItem(item.id)
    }

  }

  const cartItems = (
    <ul className={styles["cart-items"]}>{cartCtx.items.map((item) => (
      <li>{<CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}       /* we use bind to make sure the correct args are passed each time the function is called*/
        onAdd={cartItemAddHandler.bind(null, item)} />}</li>))}</ul>
  )

  const cartModalContent = <>
    {cartItems}
    <div className={styles.total}>
      <span>Total Amount</span>
      <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
    </div>
    {orderClicked && <Checkout submitOrderHandler={submitOrderHandler} hideCartHandler={props.hideCartHandler} />}
    <div className={styles.actions}>
      {!orderClicked && <button className={styles["button--alt"]} onClick={props.hideCartHandler}>Close</button>}
      {hasItems && !orderClicked && <button onClick={orderHandler} className={styles.button}>Order</button>}

    </div>
  </>

  const isSubmittingModalContent = <p>Submitting...</p>

  const doneSubmitting = <>
    <p>Success!</p>
    <div className={styles.actions}>
      {<button className={styles.button} onClick={props.hideCartHandler}>Close</button>}

    </div>
  </>
  return (
    <Modal hideCart={props.hideCartHandler}>

      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && doneSubmitting}
    </Modal>



  )
}

export default Cart