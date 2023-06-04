import React from "react"
import styles from "./AvailableMeals.module.css"
import Card from "../../UI/Card"
import MealItem from "./MealItem/MealItem"
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
//this component renders each available item in a list
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => {
        return (
            <li><MealItem 
            id = {meal.id}
            key = {meal.id} 
            name = {meal.name} 
            description = {meal.description} 
            price = {meal.price}></MealItem></li>
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