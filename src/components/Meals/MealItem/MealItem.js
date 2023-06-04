import styles from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"

//This component is used as the "menu" to display the current inventory and relevant info
//
const MealItem = props =>{

    const price = "$" + props.price.toFixed(2)
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className = {styles.description}>{props.description}</div>
                <div className = {styles.price}>{price}</div>
            </div>
           
           <div>
              <MealItemForm id = {props.id} />

            </div>

        </li>


    )
}

export default MealItem