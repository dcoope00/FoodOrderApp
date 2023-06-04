import FormStyles from "./MealItemForm.module.css"
import Input from "../../../UI/Input"

// This component is used to handle adding items to the cart using a custom Input component
const MealItemForm = props =>{


    return (
        <form className={FormStyles.form} >
            <Input label = "Qty" input = {{
                id: "amount" + props.id, 
                type: "number", 
                min: "1", 
                max: "5", 
                step: "1", 
                defaultValue: "1"
                }} />
            <button>Add To Cart</button>


        </form>

    )

}

export default MealItemForm