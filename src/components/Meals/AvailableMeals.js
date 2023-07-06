import React, { useCallback, useEffect, useState } from "react"
import styles from "./AvailableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"

//this component renders each available item in a list from a database

const AvailableMeals = () => {

    const [meals, setMeals] = useState([])
    

    useEffect( () => {
        try {
            const response =  fetch("https://foodorderapp-c087b-default-rtdb.firebaseio.com/meals.json")
            .then((response) => response.json())
            .then((data) =>{
                const loadedMeals = []
                for(const key in data){
                    loadedMeals.push({
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price
                    })
                }
                setMeals(loadedMeals)

            })

        }catch(error){

        }
    }, [])

    const mealsList = meals.map(meal => {
        return (
            <li><MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}></MealItem></li>
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