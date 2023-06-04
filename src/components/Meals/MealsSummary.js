import React from "react"
import styles from "./MealsSummary.module.css"

// this simple component displays the service provided 
const MealsSummary = () => {

    return (
        <section className = {styles.summary}>
            <h2 >Delicious Baked Goods </h2>
            <p>
                Choose from our selection of high quality treats to satisfy your sweet tooth!
            </p>
            <p>
                We use only the finest ingredients to maintain a superior quality product that is
                sure to keep you coming back! 
            </p>
            <p>
                Catering Available
            </p>
        </section>


    )


}

export default MealsSummary