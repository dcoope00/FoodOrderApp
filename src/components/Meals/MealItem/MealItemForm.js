import FormStyles from "./MealItemForm.module.css"
import Input from "../../UI/Input"
import { useRef, useState } from "react"
// This component is used to handle adding items to the cart using a custom Input component
const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef(0)

    const addToCartHandler = e => {
        e.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredAmountToNum = +enteredAmount

        if (enteredAmount.trim().length === 0 || enteredAmountToNum < 1 || enteredAmountToNum > 5) {
            setAmountIsValid(false)
            return;
        }


        props.onAddToCart(enteredAmountToNum)
    }

    return (
        <form className={FormStyles.form} onSubmit={addToCartHandler}>

            <Input ref={amountInputRef} label="Qty" input={{     /* this input holds the quantites of each menu item  */

                id: "amount" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} />
            <button onClick={addToCartHandler}>Add To Cart</button>
            {!amountIsValid && <p>Amount must be between 1-5</p>}


        </form>

    )

}

export default MealItemForm