import React from "react"
import styles from "./AvailableMeals.module.css"
import Card from "../UI/Card"
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chocolate Cupcake',
        description: 'A rich dark chocolate cupcake',
        price: 4.99,
    },
    {
        id: 'm2',
        name: 'Glazed Doughnut Holes',
        description: '12 iced doughnut holes',
        price: 6.99,
    },
    {
        id: 'm3',
        name: 'Peanut Butter Cookie',
        description: 'Peanut butter chocolate swirl cookie',
        price: 0.99,
    },
    {
        id: 'm4',
        name: 'Apple Fritter',
        description: 'Cinnamon apples baked into our cinnamon swirl bread',
        price: 3.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => {
        return (
            <li>{meal.name}</li>
        )
    })

    return (
        <section className={styles.meals}>
            <Card>

                <ul>
                    {mealsList}
                </ul>
            </Card>

        </section>
    )


}

export default AvailableMeals